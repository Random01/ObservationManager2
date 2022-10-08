import * as core from 'express-serve-static-core';

import { RouterFactory } from '../common';
import { SessionExporterFactory } from './session.exporter.service';
import { SessionStore } from './session.store';

export class SessionRouter {

  constructor(app: core.Express) {
    RouterFactory.create(
      app,
      new SessionStore(),
      '/sessions',
      new SessionExporterFactory(),
    );
  }

}
