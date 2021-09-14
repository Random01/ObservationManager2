import express from 'express';
import { Connection } from 'mongoose';

import * as core from 'express-serve-static-core';

import { BaseMongooseStore, RouterFactory } from '../common';

import { ObservationStore } from './observation.store';
import { ObservationExporterService } from './observation.exporter.service';

class ObservationRouterFactory extends RouterFactory {

    public static create(
        app: core.Express,
        store: BaseMongooseStore<any, any>,
        path: string,
        exporter: ObservationExporterService,
    ) {
        const router = express.Router();
        const rf = new ObservationRouterFactory(store, router, exporter);

        app.use('/api' + path, router);

        return rf;
    }

}

export class ObservationRouter {

    constructor(app: core.Express, db: Connection) {
        ObservationRouterFactory.create(
            app, new ObservationStore(db), '/observations', new ObservationExporterService());
    }

}
