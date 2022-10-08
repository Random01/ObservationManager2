import * as core from 'express-serve-static-core';

import { RouterFactory } from '../common';
import { ScopeExporterFactory } from './scope.exporter.service';
import { ScopeStore } from './scope.store';

export class ScopeRouter {

  constructor(app: core.Express) {
    RouterFactory.create(
      app,
      new ScopeStore(),
      '/scopes',
      new ScopeExporterFactory(),
    );
  }

}
