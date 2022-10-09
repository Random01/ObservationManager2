import express, { Request, Response } from 'express';
import * as core from 'express-serve-static-core';

import { RouterFactory } from '../common';
import { TargetStore } from './target.store';

class TargetRouterFactory extends RouterFactory<any, any> {

  public override parseRequestParams(req: Request) {
    const requestParams = super.parseRequestParams(req);
    const { name } = req.query;

    if (name) {
      (requestParams as any).name = new RegExp(name as any);
    }

    return requestParams;
  }

  public static override create(app: core.Express, store: TargetStore, path: string) {
    const router = express.Router();
    const rf = new TargetRouterFactory(store, router, undefined);

    app.use('/api' + path, router);

    return rf;
  }

  public override getItemsHandler(req: Request, res: Response) {
    const { name, maxCount } = req.query;

    if (name && maxCount) {
      this.store.search({
        name,
        maxCount: parseFloat(maxCount as any),
      }).then(
        (items: any) => res.json(items),
        (error: Error) => this.handleError(res, error)
      );
    } else {
      this.store.getItems({
        requestParameters: this.parseRequestParams(req),
      }).then(
        (items: any[]) => res.json(items),
        (error: Error) => this.handleError(res, error),
      );
    }
  }

}

export class TargetRouter {

  constructor(app: core.Express) {
    TargetRouterFactory.create(app, new TargetStore(), '/targets');
  }

}
