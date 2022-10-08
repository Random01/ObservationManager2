import * as core from 'express-serve-static-core';

import { ObservingProgramRouterFactory } from './observing-program-router.factory';
import { ObservingProgramStore } from './observing-program.store';

export class ObservingProgramRouter {

  constructor(app: core.Express) {
    ObservingProgramRouterFactory.create(
      app,
      new ObservingProgramStore(),
      '/observing-programs',
    );
  }

}
