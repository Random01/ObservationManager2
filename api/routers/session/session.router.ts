import * as core from 'express-serve-static-core';

import { Connection } from 'mongoose';

import { RouterFactory } from '../common';

import { SessionExporterFactory } from './session.exporter.service';
import { SessionStore } from './session.store';

export class SessionRouter {

  constructor(app: core.Express, db: Connection) {
    RouterFactory.create(
      app,
      new SessionStore(db),
      '/sessions',
      new SessionExporterFactory(),
    );
  }

}
