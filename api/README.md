# Observation Manager API

Use Node `22.22.3`. Install dependencies with `npm ci` and run `npm run build:watch` from this directory.

Set `CONNECTION_STRING` to the MongoDB connection URL and `SECRET` to a JWT signing secret. Keep the same secret across restarts and instances. If an installation previously used the built-in default secret, existing sessions will require a fresh sign-in.

On PowerShell, for a new local environment:

```powershell
$env:CONNECTION_STRING = 'mongodb://localhost:27017/'
$env:SECRET = node -p "require('node:crypto').randomBytes(32).toString('hex')"
npm run start:watch
```

On a POSIX shell:

```sh
export CONNECTION_STRING='mongodb://localhost:27017/'
export SECRET="$(node -p "require('node:crypto').randomBytes(32).toString('hex')")"
npm run start:watch
```

`PORT` defaults to `3002`. Use `npm run build` to produce the deployment bundle and `npm start` to run it.

## Architecture

- `app.ts` assembles the Express app. The API has its own middleware and JSON error handling. The static Angular app and its deep-link fallback are mounted after the API.
- `index.ts` validates startup configuration, connects to MongoDB, initializes the user model, and starts the HTTP listener.
- `routers/router-provider.ts` registers routes after their domain routers have been constructed. Domain routers translate HTTP requests and call stores. Stores own queries, write filters, and persistence.
- `npm test` exercises the HTTP app with mocked MongoDB collection methods. This covers routing, authentication, and shared write behavior without starting MongoDB.

## Follow-up architecture review

1. Define resource-level visibility rules for shared catalogs, user-owned data, exports, and observing-program statistics. Legacy records and cross-resource references need an explicit policy before changing read behavior.
2. Define query limits and schemas for pagination, sorting, and search. Keep existing callers that intentionally request an unpaginated collection in mind.
3. Move password hashing off the event loop and plan upgrades for existing hashes. Review credential throttling and token lifetime alongside that work.
4. Verify catalog import paths in the deployed bundle and add live MongoDB coverage for query and index behavior.
