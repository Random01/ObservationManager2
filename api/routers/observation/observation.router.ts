import * as core from 'express-serve-static-core';

import { BaseEntityRouter } from '../common';

import { ObservationStore } from './observation.store';
import { ObservationExporterService } from './observation.exporter.service';
import { Observation } from './observation.interface';

export class ObservationRouter extends BaseEntityRouter<Observation, ObservationStore> {

  constructor(
    router: core.Router,
    store = new ObservationStore(),
    exporter = new ObservationExporterService(),
  ) {
    super(router, store, exporter);
  }

}
