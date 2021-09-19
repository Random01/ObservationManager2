import * as core from 'express-serve-static-core';

import { Connection } from 'mongoose';

import { ObservingProgramRouterFactory } from './observing-program-router.factory';
import { ObservingProgramStore } from './observing-program.store';

export class ObservingProgramRouter {

  constructor(app: core.Express, db: Connection) {
    ObservingProgramRouterFactory.create(
      app,
      new ObservingProgramStore(db),
      '/observing-programs',
    );
  }

}
