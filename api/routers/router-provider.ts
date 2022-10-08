import * as core from 'express-serve-static-core';

import { ConstellationRouter } from './constellation';
import { EyepieceRouter } from './eyepiece';
import { FilterRouter } from './filter';
import { LensRouter } from './lens';
import { ObservationRouter } from './observation';
import { ObservingProgramRouter } from './observing-program';
import { ScopeRouter } from './scope';
import { SessionRouter } from './session';
import { SiteRouter } from './site';
import { TargetRouter } from './target';
import { UserRouter } from './user';
import { VendorRouter } from './vendor';

export class RouterProvider {

  constructor(app: core.Express) {
    new FilterRouter(app);
    new ScopeRouter(app);
    new ConstellationRouter(app);
    new UserRouter(app);
    new EyepieceRouter(app);
    new SiteRouter(app);
    new TargetRouter(app);
    new ObservationRouter(app);
    new SessionRouter(app);
    new LensRouter(app);
    new ObservingProgramRouter(app);
    new VendorRouter(app);
  }

}
