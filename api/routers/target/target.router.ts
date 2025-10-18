import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';

import { BaseEntityRouter } from '../common';
import { TargetStore } from './target.store';
import { Target } from './target.interface';

export class TargetRouter extends BaseEntityRouter<Target, TargetStore> {
  constructor(router: core.Router, store = new TargetStore()) {
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

  // todo: any
  public override getItemsHandler(req: any, res: Response) {
    const name = this.toString(req.query.name);
    const maxCount = this.toNumber(req.query.maxCount);

    if (name && maxCount) {
      this.store.search({ name, maxCount }).then(
        (items) => res.json(items),
        (error: Error) => this.handleError(res, error),
      );
    } else {
      this.store
        .getItems({
          requestParameters: this.parseRequestParams(req),
        })
        .then(
          (items) => res.json(items),
          (error: Error) => this.handleError(res, error),
        );
    }
  }
}
