import type { Request, Response, Router } from 'express';

import { BaseEntityRouter } from '../common';
import { auth } from '../authentication';
import { ObservingProgramStore } from './observing-program.store';
import { ObservingProgram } from './observing-program.interface';

export class ObservingProgramRouter extends BaseEntityRouter<ObservingProgram, ObservingProgramStore> {
  constructor(router: Router, store = new ObservingProgramStore()) {
    super(router, store);
  }

  public override registerRoutes(): void {
    super.registerRoutes();
    this.router.get('/overall-statistics/:id', auth.optional, this.getOverallStatistics.bind(this));
    this.router.get('/statistics/:id', auth.optional, this.getStatistics.bind(this));
  }

  protected async getStatistics(req: Request<{ id: string }>, res: Response): Promise<void> {
    const result = await this.store.getStatistics({
      id: req.params.id,
      size: this.toNumber(req.query.size),
      page: this.toNumber(req.query.page),
    });
    res.json(result);
  }

  protected async getOverallStatistics(req: Request<{ id: string }>, res: Response): Promise<void> {
    const result = await this.store.getOverallStatistics({ id: req.params.id });
    res.json(result);
  }
}
