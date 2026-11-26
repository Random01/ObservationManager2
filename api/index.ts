import express from 'express';
import path from 'path';
import compression from 'compression';
import errorhandler from 'errorhandler';
import mongoose from 'mongoose';
import cors from 'cors';

import passport from './config/passport';
import { dbConfig } from './config';

import { RouterProvider } from './routers';
import { UserModel } from './routers/user/user.model';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(passport.initialize());

if (process.env.NODE_ENV === 'development') {
  app.use(errorhandler());
  mongoose.set('debug', true);
} else {
  app.use(compression({ level: 1 }));
}

async function start() {
  if (!dbConfig.url) {
    throw new Error('DB connection string should be provided.');
  }

  await mongoose.connect(dbConfig.url);
  mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
  await UserModel.init();

  new RouterProvider(app);

  app.use('/{*splat}', (_, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

  const port = process.env.PORT || 3002;
  await new Promise<void>((resolve, reject) => {
    app.listen(port, (error?: Error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
  console.log(`Server started on port ${port}!`);
}

start().catch(async (error: unknown) => {
  console.error('API startup failed:', error);
  process.exitCode = 1;
  await mongoose.disconnect().catch((disconnectError: unknown) => {
    console.error('MongoDB cleanup failed:', disconnectError);
  });
});
