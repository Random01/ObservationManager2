import * as core from 'express-serve-static-core';

import { Connection } from 'mongoose';

import { RouterFactory } from '../common';

import { LensStore } from './lens.store';

export class LensRouter {

    constructor(app: core.Express, db: Connection) {
        RouterFactory.create(app, new LensStore(db), '/lenses');
    }

}
