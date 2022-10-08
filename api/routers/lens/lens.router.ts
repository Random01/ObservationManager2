import * as core from 'express-serve-static-core';

import { RouterFactory } from '../common';
import { LensExporterFactory } from './lens-exporter.service';
import { LensStore } from './lens.store';

export class LensRouter {

  constructor(app: core.Express) {
    RouterFactory.create(
      app,
      new LensStore(),
      '/lenses',
      new LensExporterFactory(),
    );
  }

}
