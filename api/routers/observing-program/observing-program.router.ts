import * as core from 'express-serve-static-core';
import { Request, Response } from 'express';

import { BaseEntityRouter } from '../common';
import { auth } from '../authentication';

import { ObservingProgramStore } from './observing-program.store';
import { ObservingProgram } from './observing-program.interface';

export class ObservingProgramRouter extends BaseEntityRouter<ObservingProgram, ObservingProgramStore> {
  constructor(router: core.Router, store = new ObservingProgramStore()) {
    super(router, store);
  }

  protected override setUp(): void {
    super.setUp();

    this.router.get('/overall-statistics/:id', auth.optional, this.getOverallStatistics.bind(this));

    this.router.get('/statistics/:id', auth.optional, this.getStatistics.bind(this));
  }

  protected getStatistics(req: Request, res: Response): void {
    this.store
      .getStatistics({
        id: req.params.id,
        // userId: this.getUserId(req),
        size: this.toNumber(req.query.size),
        page: this.toNumber(req.query.page),
      })
      .then(
        (entity) => res.json(entity),
        (error: Error) => this.handleError(res, error),
      );
  }

  protected getOverallStatistics(req: Request, res: Response): void {
    this.store
      .getOverallStatistics({
        id: req.params.id,
        // userId: this.getUserId(req),
      })
      .then(
        (entity) => res.json(entity),
        (error: Error) => this.handleError(res, error),
      );
  }
}
