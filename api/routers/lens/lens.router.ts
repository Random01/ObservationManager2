import * as core from 'express-serve-static-core';

import { BaseEntityRouter } from '../common';

import { LensExporterFactory } from './lens-exporter.service';
import { LensStore } from './lens.store';
import { Lens } from './lens.interface';

export class LensRouter extends BaseEntityRouter<Lens, LensStore> {

  constructor(
    router: core.Router,
    store = new LensStore(),
    exporter = new LensExporterFactory(),
  ) {
    super(router, store, exporter);
  }

}
