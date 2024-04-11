import { Request, Response } from 'express';

import { BaseRouter } from '../common';

export class VendorRouter extends BaseRouter {

  protected override setUp(): void {
    this.router.get('/', this.getAll.bind(this));
  }

  private getAll(_: Request, res: Response): void {
    // todo: should be in DB
    res.json([
      { name: 'Sky Watcher' },
      { name: 'Deep-Sky' },
      { name: 'Celestron' },
      { name: 'Baader' },
      { name: 'Astronomik' },
      { name: 'Tele Vue' },
      { name: 'Explore Scientific' },
      { name: 'Lumicon' },
    ]);
  }

}
