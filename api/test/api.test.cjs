const assert = require('node:assert/strict');
const { once } = require('node:events');
const { mkdtemp, rmdir, unlink, writeFile } = require('node:fs/promises');
const { tmpdir } = require('node:os');
const path = require('node:path');
const { after, before, test } = require('node:test');
const { sign } = require('jsonwebtoken');
const { mongo, Types } = require('mongoose');

const { createApp } = require('../_test-output/app');
const { ScopeModel } = require('../_test-output/routers/scope/scope.model');
const { UserModel } = require('../_test-output/routers/user/user.model');

const ownerId = new Types.ObjectId();
const scopeId = new Types.ObjectId();
const otherId = new Types.ObjectId();
const secret = 'test-only-signing-secret';
const jsonHeaders = { 'Content-Type': 'application/json' };
const authHeaders = { ...jsonHeaders, Authorization: sign({ id: ownerId.toString() }, secret) };

let publicPath;
let server;
let origin;
const previousSecret = process.env.SECRET;

before(async () => {
  process.env.SECRET = secret;
  publicPath = await mkdtemp(path.join(tmpdir(), 'observation-manager-api-'));
  await writeFile(path.join(publicPath, 'index.html'), '<title>Observation Manager</title>');
  await writeFile(path.join(publicPath, 'app.js'), 'console.log("ready");');
  server = createApp(publicPath).listen(0, '127.0.0.1');
  await once(server, 'listening');
  origin = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  if (server?.listening) {
    await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  }
  if (publicPath) {
    await unlink(path.join(publicPath, 'index.html'));
    await unlink(path.join(publicPath, 'app.js'));
    await rmdir(publicPath);
  }
  if (previousSecret === undefined) {
    delete process.env.SECRET;
  } else {
    process.env.SECRET = previousSecret;
  }
});

test('app creation requires an explicit signing secret', () => {
  delete process.env.SECRET;
  try {
    assert.throws(() => createApp(), /SECRET must be set/);
  } finally {
    process.env.SECRET = secret;
  }
});

test('API misses return JSON while SPA deep links and static assets still resolve', async () => {
  for (const method of ['GET', 'POST']) {
    const response = await fetch(origin + '/api/unknown', { method });
    assert.equal(response.status, 404);
    assert.deepEqual(await response.json(), { success: false, errors: [{ message: 'API route not found.' }] });
  }

  const page = await fetch(origin + '/observations/123');
  assert.equal(page.status, 200);
  assert.match(await page.text(), /Observation Manager/);
  const asset = await fetch(origin + '/app.js');
  assert.equal(asset.status, 200);
  assert.match(await asset.text(), /console\.log/);
});

test('malformed JSON and unauthorized requests use API errors', async () => {
  const malformed = await fetch(origin + '/api/users/login', { method: 'POST', headers: jsonHeaders, body: '{' });
  assert.equal(malformed.status, 400);
  assert.deepEqual(await malformed.json(), { success: false, errors: [{ message: 'Bad Request' }] });

  for (const headers of [{}, { Authorization: sign({ id: 'invalid' }, secret) }]) {
    const unauthorized = await fetch(origin + '/api/users/user', { headers });
    assert.equal(unauthorized.status, 401);
    assert.deepEqual(await unauthorized.json(), {
      success: false,
      errors: [{ message: 'Authentication required or invalid token.' }],
    });
  }
});

test('login keeps its field errors and issues a raw JWT accepted by the account endpoint', async (t) => {
  const missing = await fetch(origin + '/api/users/login', { method: 'POST', headers: jsonHeaders, body: '{}' });
  assert.equal(missing.status, 422);
  assert.deepEqual(await missing.json(), { success: false, errors: { userName: "can't be blank" } });

  const user = new UserModel({ _id: ownerId, userName: 'observer', email: 'observer@example.test' });
  user.setPassword('example password');
  t.mock.method(UserModel.collection, 'findOne', async () => user.toObject());

  const invalid = await fetch(origin + '/api/users/login', {
    method: 'POST',
    headers: jsonHeaders,
    body: JSON.stringify({ user: { userName: 'observer', password: 'wrong password' } }),
  });
  assert.equal(invalid.status, 422);
  assert.deepEqual(await invalid.json(), { errors: { 'user name or password': 'is invalid' } });

  const login = await fetch(origin + '/api/users/login', {
    method: 'POST',
    headers: jsonHeaders,
    body: JSON.stringify({ user: { userName: 'observer', password: 'example password' } }),
  });
  assert.equal(login.status, 200);
  const { user: signedIn } = await login.json();
  assert.equal(signedIn._id, ownerId.toString());
  assert.equal(signedIn.userName, 'observer');
  assert.ok(signedIn.token);
  assert.equal(signedIn.hash, undefined);

  const profile = await fetch(origin + '/api/users/user', { headers: { Authorization: signedIn.token } });
  assert.equal(profile.status, 200);
  assert.equal((await profile.json()).user._id, signedIn._id);
});

test('rejected account queries return a generic 500 response', async (t) => {
  t.mock.method(UserModel.collection, 'findOne', async () => {
    throw new Error('internal database detail');
  });
  const logged = t.mock.method(console, 'error', () => {});
  const response = await fetch(origin + '/api/users', { headers: authHeaders });
  assert.equal(response.status, 500);
  assert.deepEqual(await response.json(), { success: false, errors: [{ message: 'Internal server error.' }] });
  assert.equal(logged.mock.callCount(), 1);
});

test('duplicate registration returns a conflict with no database details', async (t) => {
  t.mock.method(UserModel.collection, 'insertOne', async () => {
    throw new mongo.MongoServerError({ message: 'duplicate observer@example.test', code: 11000 });
  });
  const response = await fetch(origin + '/api/users', {
    method: 'POST',
    headers: jsonHeaders,
    body: JSON.stringify({ email: 'observer@example.test', userName: 'observer', password: 'example password' }),
  });
  assert.equal(response.status, 409);
  assert.deepEqual(await response.json(), { success: false, errors: [{ message: 'A record with these values already exists.' }] });
});

test('updates use the URL and owner, validate fields, and preserve creation metadata', async (t) => {
  const original = { _id: scopeId, userCreated: ownerId, dateCreated: new Date(0), model: 'Original' };
  const database = t.mock.method(ScopeModel.collection, 'findOneAndUpdate', async (filter, update) => {
    if (!scopeId.equals(filter._id) || !ownerId.equals(filter.userCreated)) {
      return null;
    }
    return { ...original, ...update.$set };
  });
  const url = origin + '/api/scopes/' + scopeId;
  const put = (url, body) => fetch(url, { method: 'PUT', headers: authHeaders, body: JSON.stringify(body) });

  const mismatch = await put(url, { id: otherId });
  assert.equal(mismatch.status, 400);
  await mismatch.json();
  const invalidField = await put(url, { aperture: -1 });
  assert.equal(invalidField.status, 422);
  await invalidField.json();
  assert.equal(database.mock.callCount(), 0);

  const updated = await put(url, { id: scopeId, model: 'Revised', userCreated: otherId, dateCreated: new Date(5000) });
  assert.equal(updated.status, 200);
  const record = await updated.json();
  assert.equal(record._id, scopeId.toString());
  assert.equal(record.model, 'Revised');
  assert.equal(record.userCreated, ownerId.toString());
  assert.equal(record.dateCreated, original.dateCreated.toISOString());
  assert.equal(record.userModified, ownerId.toString());

  const missing = await put(origin + '/api/scopes/' + otherId, { model: 'Revised' });
  assert.equal(missing.status, 404);
  await missing.json();
});

test('deletes succeed only when an owned record is removed', async (t) => {
  let exists = true;
  t.mock.method(ScopeModel.collection, 'deleteOne', async (filter) => {
    if (exists && scopeId.equals(filter._id) && ownerId.equals(filter.userCreated)) {
      exists = false;
      return { acknowledged: true, deletedCount: 1 };
    }
    return { acknowledged: true, deletedCount: 0 };
  });

  const url = origin + '/api/scopes/' + scopeId;
  const first = await fetch(url, { method: 'DELETE', headers: authHeaders });
  assert.equal(first.status, 200);
  assert.deepEqual(await first.json(), { success: true });
  const retry = await fetch(url, { method: 'DELETE', headers: authHeaders });
  assert.equal(retry.status, 404);
  assert.deepEqual(await retry.json(), { success: false, errors: [{ message: 'Record not found.' }] });
});

test('creates use server-assigned IDs, ownership, and timestamps', async (t) => {
  t.mock.method(ScopeModel.collection, 'insertOne', async (document) => {
    assert.equal(document.model, 'New scope');
    assert.equal(document.userCreated.toString(), ownerId.toString());
    assert.equal(document.userModified.toString(), ownerId.toString());
    assert.ok(!otherId.equals(document._id));
    assert.ok(document.dateCreated.getTime() > 0);
    assert.equal(document.dateModified.getTime(), document.dateCreated.getTime());
    return { acknowledged: true, insertedId: document._id };
  });

  const response = await fetch(origin + '/api/scopes', {
    method: 'POST',
    headers: authHeaders,
    body: JSON.stringify({ model: 'New scope', _id: otherId, userCreated: otherId, dateCreated: new Date(0) }),
  });
  assert.equal(response.status, 200);
  assert.equal((await response.json()).model, 'New scope');
});

test('exports validate the format before querying and preserve supported output', async (t) => {
  const query = t.mock.method(ScopeModel.collection, 'find', () => ({
    toArray: async () => [{ _id: scopeId, model: 'Example', aperture: 100 }],
  }));
  t.mock.method(ScopeModel.collection, 'countDocuments', async () => 1);

  const url = origin + '/api/scopes/export?exportType=';
  const unsupported = await fetch(url + 'xml', { headers: authHeaders });
  assert.equal(unsupported.status, 400);
  assert.deepEqual(await unsupported.json(), { success: false, errors: [{ message: 'Unsupported export format.' }] });
  assert.equal(query.mock.callCount(), 0);

  const supported = await fetch(url + 'csv', { headers: authHeaders });
  assert.equal(supported.status, 200);
  assert.match(await supported.text(), /Example;100/);
});

