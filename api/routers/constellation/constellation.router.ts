import * as core from 'express-serve-static-core';

import { RouterFactory } from '../common/router/router-factory';

import { ConstellationStore } from './constellation.store';

export class ConstellationRouter {

  constructor(app: core.Express) {
    RouterFactory.create(app, new ConstellationStore(), '/constellations');
  }

}
