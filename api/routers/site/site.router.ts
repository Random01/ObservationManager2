import * as core from 'express-serve-static-core';

import { BaseEntityRouter } from '../common';
import { SiteExporterFactory } from './site.exporter.service';
import { SiteStore } from './site.store';
import { Site } from './site.interface';

export class SiteRouter extends BaseEntityRouter<Site, SiteStore> {
  constructor(router: core.Router, store = new SiteStore(), exporter = new SiteExporterFactory()) {
    super(router, store, exporter);
  }
}
