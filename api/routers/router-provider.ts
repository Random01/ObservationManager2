import { Router } from 'express';

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
import { BaseRouter } from './common';

export function createApiRouter(): Router {
  const api = Router();

  function mount(path: string, RouterType: new (router: Router) => BaseRouter) {
    const router = Router({ strict: true });
    new RouterType(router).registerRoutes();
    api.use(path, router);
  }

  mount('/filters', FilterRouter);
  mount('/scopes', ScopeRouter);
  mount('/constellations', ConstellationRouter);
  mount('/users', UserRouter);
  mount('/eyepieces', EyepieceRouter);
  mount('/sites', SiteRouter);
  mount('/targets', TargetRouter);
  mount('/observations', ObservationRouter);
  mount('/sessions', SessionRouter);
  mount('/lenses', LensRouter);
  mount('/observing-programs', ObservingProgramRouter);
  mount('/vendors', VendorRouter);

  return api;
}
