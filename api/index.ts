import mongoose from 'mongoose';
import { once } from 'node:events';

import { createApp } from './app';
import { dbConfig } from './config/db-config';
import { UserModel } from './routers/user/user.model';

async function start() {
  const app = createApp();
  if (!dbConfig.url) {
    throw new Error('CONNECTION_STRING must be set.');
  }

  const port = Number(process.env.PORT ?? 3002);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('PORT must be an integer between 1 and 65535.');
  }

  await mongoose.connect(dbConfig.url);
  mongoose.connection.on('error', (error) => console.error('MongoDB connection error:', error));
  await UserModel.init();

  await once(app.listen(port), 'listening');
  console.log(`Server started on port ${port}!`);
}

start().catch(async (error: unknown) => {
  console.error('API startup failed:', error);
  process.exitCode = 1;
  await mongoose.disconnect().catch((disconnectError: unknown) => {
    console.error('MongoDB cleanup failed:', disconnectError);
  });
});
