import * as core from 'express-serve-static-core';
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

export class RouterProvider {
  constructor(app: core.Express) {
    this.create(app, FilterRouter, '/filters');
    this.create(app, ScopeRouter, '/scopes');
    this.create(app, ConstellationRouter, '/constellations');
    this.create(app, UserRouter, '/users');
    this.create(app, EyepieceRouter, '/eyepieces');
    this.create(app, SiteRouter, '/sites');
    this.create(app, TargetRouter, '/targets');
    this.create(app, ObservationRouter, '/observations');
    this.create(app, SessionRouter, '/sessions');
    this.create(app, LensRouter, '/lenses');
    this.create(app, ObservingProgramRouter, '/observing-programs');
    this.create(app, VendorRouter, '/vendors');
  }

  private create(app: core.Express, ctor: new (router: core.Router) => BaseRouter, path: string) {
    const router = Router({ strict: true });
    app.use('/api' + path, router);
    return new ctor(router);
  }
}
