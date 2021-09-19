import * as core from 'express-serve-static-core';

import { Connection } from 'mongoose';

import { RouterFactory } from '../common';

import { ScopeExporterFactory } from './scope.exporter.service';
import { ScopeStore } from './scope.store';

export class ScopeRouter {

  constructor(app: core.Express, db: Connection) {
    RouterFactory.create(
      app,
      new ScopeStore(db),
      '/scopes',
      new ScopeExporterFactory(),
    );
  }

}
