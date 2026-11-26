import compression from 'compression';
import cors from 'cors';
import express from 'express';
import path from 'node:path';

import { getAuthSecret } from './config/auth-config';
import passport from './config/passport';
import { handleApiError, HttpError } from './routers/common/router/http-error';
import { createApiRouter } from './routers/router-provider';

export function createApp(publicPath = path.join(__dirname, 'public')) {
  getAuthSecret();

  const app = express();
  app.use(compression({ level: 1 }));

  const api = express.Router();
  api.use(cors());
  api.use(express.urlencoded({ extended: true }));
  api.use(express.json());
  api.use(passport.initialize());
  api.use(createApiRouter());
  api.use(() => {
    throw new HttpError(404, 'API route not found.');
  });
  api.use(handleApiError);
  app.use('/api', api);

  app.use(express.static(publicPath));
  app.get('/{*splat}', (_req, res) => {
    res.sendFile(path.resolve(publicPath, 'index.html'));
  });

  return app;
}
