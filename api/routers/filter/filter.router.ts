import * as core from 'express-serve-static-core';

import { RouterFactory } from '../common';

import { FilterExporterFactory } from './filter-exporter.service';
import { FilterStore } from './filter.store';

export class FilterRouter {

  constructor(app: core.Express) {
    RouterFactory.create(
      app,
      new FilterStore(),
      '/filters',
      new FilterExporterFactory(),
    );
  }

}
