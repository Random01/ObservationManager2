import * as core from 'express-serve-static-core';

import { BaseEntityRouter } from '../common';
import { ScopeExporterFactory } from './scope.exporter.service';
import { ScopeStore } from './scope.store';
import { Scope } from './scope.interface';

export class ScopeRouter extends BaseEntityRouter<Scope, ScopeStore> {

  constructor(
    router: core.Router,
    store = new ScopeStore(),
    exporter = new ScopeExporterFactory(),
  ) {
    super(router, store, exporter);
  }

}
