import { Request, Router } from 'express-serve-static-core';

import { BaseEntityRouter, GetItemsRequestParameters } from '../common';

import { ObservationStore } from './observation.store';
import { ObservationExporterService } from './observation.exporter.service';
import { Observation } from './observation.interface';

export class ObservationRouter extends BaseEntityRouter<Observation, ObservationStore> {

  constructor(
    router: Router,
    store = new ObservationStore(),
    exporter = new ObservationExporterService(),
  ) {
    super(router, store, exporter);
  }

  public parseRequestParams(req: Request): GetItemsRequestParameters {
    const session = this.toString(req.query.session);
    return {
      ...super.parseRequestParams(req),
      ...(session ? { session } : undefined),
    };
  }

}
