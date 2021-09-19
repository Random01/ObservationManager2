import * as core from 'express-serve-static-core';

import { Connection } from 'mongoose';

import { RouterFactory } from '../common/router/router-factory';

import { ConstellationStore } from './constellation.store';

export class ConstellationRouter {

  constructor(app: core.Express, db: Connection) {
    RouterFactory.create(app, new ConstellationStore(db), '/constellations');
  }

}
