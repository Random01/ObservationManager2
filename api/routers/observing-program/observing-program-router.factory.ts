import { Router, Request, Response } from 'express';
import * as core from 'express-serve-static-core';

import { ExporterFactory, RouterFactory } from '../common';
import { auth } from '../authentication';

import { ObservingProgramStore } from './observing-program.store';
import { ObservingProgram } from './observing-program.interface';

export class ObservingProgramRouterFactory extends RouterFactory<ObservingProgram, any> {

  public static override create(
    app: core.Express,
    store: ObservingProgramStore,
    path: string,
    exporter?: ExporterFactory,
  ) {
    const router = Router({ strict: true });
    const routerFactory = new ObservingProgramRouterFactory(store, router, exporter);

    app.use('/api' + path, router);

    return routerFactory;
  }

  protected override setUp(): void {
    super.setUp();

    this.router.get(
      '/overall-statistics/:id',
      auth.optional,
      this.getOverallStatistics.bind(this)
    );

    this.router.get(
      '/statistics/:id',
      auth.optional,
      this.getStatistics.bind(this)
    );
  }

  protected getStatistics(req: Request, res: Response): void {
    this.store.getStatistics({
      id: req.params.id,
      userId: this.getUserId(req),
      page: typeof req.query.page === 'string' ? parseInt(req.query.page, 10) : undefined,
      size: typeof req.query.size === 'string' ? parseInt(req.query.size, 10) : undefined,
    }).then(
      (entity: any) => res.json(entity),
      (error: Error) => this.handleError(res, error)
    );
  }

  protected getOverallStatistics(req: Request, res: Response): void {
    this.store.getOverallStatistics({
      id: req.params.id,
      userId: this.getUserId(req),
    }).then(
      (entity: any) => res.json(entity),
      (error: Error) => this.handleError(res, error)
    );
  }

}
