import express from 'express';

import * as core from 'express-serve-static-core';

import { BaseMongooseStore, RouterFactory } from '../common';

import { ObservationStore } from './observation.store';
import { ObservationExporterService } from './observation.exporter.service';

class ObservationRouterFactory extends RouterFactory {

  public static override create(
    app: core.Express,
    store: BaseMongooseStore<any, any>,
    path: string,
    exporter: ObservationExporterService,
  ) {
    const router = express.Router();
    const rf = new ObservationRouterFactory(store, router, exporter);

    app.use('/api' + path, router);

    return rf;
  }

}

export class ObservationRouter {

  constructor(app: core.Express) {
    ObservationRouterFactory.create(
      app,
      new ObservationStore(),
      '/observations',
      new ObservationExporterService(),
    );
  }

}
