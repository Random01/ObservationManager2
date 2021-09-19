import { Connection } from 'mongoose';

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

  constructor(app: core.Express, dataBase: Connection) {
    new FilterRouter(app, dataBase);
    new ScopeRouter(app, dataBase);
    new ConstellationRouter(app, dataBase);
    new UserRouter(app, dataBase);
    new EyepieceRouter(app, dataBase);
    new SiteRouter(app, dataBase);
    new TargetRouter(app, dataBase);
    new ObservationRouter(app, dataBase);
    new SessionRouter(app, dataBase);
    new LensRouter(app, dataBase);
    new ObservingProgramRouter(app, dataBase);
    new VendorRouter(app, dataBase);
  }

}
