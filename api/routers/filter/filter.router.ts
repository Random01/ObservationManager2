import * as core from 'express-serve-static-core';

import { BaseEntityRouter } from '../common';

import { FilterExporterFactory } from './filter-exporter.service';
import { FilterStore } from './filter.store';
import { Filter } from './filter.interface';

export class FilterRouter extends BaseEntityRouter<Filter, FilterStore> {

  constructor(
    router: core.Router,
    store = new FilterStore(),
    exporter = new FilterExporterFactory(),
  ) {
    super(router, store, exporter);
  }

}
