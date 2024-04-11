import * as core from 'express-serve-static-core';

import { BaseEntityRouter } from '../common/router';

import { ConstellationStore } from './constellation.store';

// todo: use Constellation
export class ConstellationRouter extends BaseEntityRouter<any, ConstellationStore> {

  constructor(
    router: core.Router,
    store = new ConstellationStore(),
  ) {
    super(router, store);
  }

}
