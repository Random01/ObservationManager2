import * as core from 'express-serve-static-core';

import { Connection } from 'mongoose';

import { RouterFactory } from '../common';
import { SiteStore } from './site.store';

export class SiteRouter {
    constructor(app: core.Express, db: Connection) {
        RouterFactory.create(app, new SiteStore(db), '/sites');
    }
}
