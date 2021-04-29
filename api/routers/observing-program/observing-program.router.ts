import express, { Request, Response } from 'express';
import * as core from 'express-serve-static-core';

import { Connection } from 'mongoose';

import { RouterFactory } from '../common';
import { auth } from '../authentication';

import { ObservingProgramStore } from './observing-program.store';

class ObservingProgramRouterFactory extends RouterFactory {

    protected currentUser: any;

    public static create(app: core.Express, store: ObservingProgramStore, path: string) {
        const router = express.Router();
        const rf = new ObservingProgramRouterFactory(store, router, undefined);

        app.use('/api' + path, router);

        return rf;
    }

    protected setUp() {
        super.setUp();

        this.router.get(
            '/overall-statistics/:id',
            auth.optional,
            this.getOverallStatistics.bind(this));

        this.router.get(
            '/statistics/:id',
            auth.optional,
            this.getStatistics.bind(this));
    }

    protected getUserId() {
        return this.currentUser ? this.currentUser.id : undefined;
    }

    protected getStatistics({ params, query }: Request, res: Response) {
        this.store.getStatistics({
            id: params.id,
            userId: this.getUserId(),
            page: typeof query.page === 'string' ? parseInt(query.page, 10) : undefined,
            size: typeof query.size === 'string' ? parseInt(query.size, 10) : undefined,
        }).then(
            (entity: any) => res.json(entity),
            (error: Error) => this.handleError(res, error)
        );
    }

    protected getOverallStatistics(req: Request, res: Response) {
        this.store.getOverallStatistics({
            id: req.params.id,
            userId: this.getUserId(),
        }).then(
            (entity: any) => res.json(entity),
            (error: Error) => this.handleError(res, error)
        );
    }

}

export class ObservingProgramRouter {

    constructor(app: core.Express, db: Connection) {
        ObservingProgramRouterFactory.create(app, new ObservingProgramStore(db), '/observing-programs');
    }

}
