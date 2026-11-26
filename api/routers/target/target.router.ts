import type { Request, Response, Router } from 'express';

import { BaseEntityRouter } from '../common';
import { TargetStore } from './target.store';
import { Target } from './target.interface';

export class TargetRouter extends BaseEntityRouter<Target, TargetStore> {
  constructor(router: Router, store = new TargetStore()) {
    super(router, store);
  }

  public override parseRequestParams(req: Request) {
    const requestParams = super.parseRequestParams(req);
    const { name } = req.query;

    if (name) {
      (requestParams as any).name = new RegExp(name as any);
    }

    return requestParams;
  }

  public override async getItemsHandler(req: Request, res: Response): Promise<void> {
    const name = this.toString(req.query.name);
    const maxCount = this.toNumber(req.query.maxCount);

    if (name && maxCount) {
      const items = await this.store.search({ name, maxCount });
      res.json(items);
    } else {
      const items = await this.store.getItems({ requestParameters: this.parseRequestParams(req) });
      res.json(items);
    }
  }
}
