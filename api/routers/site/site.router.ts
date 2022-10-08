import * as core from 'express-serve-static-core';

import { RouterFactory } from '../common';
import { SiteExporterFactory } from './site.exporter.service';
import { SiteStore } from './site.store';

export class SiteRouter {
  constructor(app: core.Express) {
    RouterFactory.create(
      app,
      new SiteStore(),
      '/sites',
      new SiteExporterFactory(),
    );
  }
}
