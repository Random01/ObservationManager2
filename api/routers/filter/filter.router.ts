import * as core from 'express-serve-static-core';

import { Connection } from 'mongoose';

import { RouterFactory } from '../common';

import { FilterExporterFactory } from './filter-exporter.service';
import { FilterStore } from './filter.store';

export class FilterRouter {

  constructor(app: core.Express, db: Connection) {
    RouterFactory.create(
      app,
      new FilterStore(db),
      '/filters', new FilterExporterFactory(),
    );
  }

}
