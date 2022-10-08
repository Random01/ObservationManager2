import express, { Request, Response } from 'express';
import * as core from 'express-serve-static-core';

export class VendorRouter {

  constructor(app: core.Express) {
    const router = express.Router();
    router.get('/', this.getAll.bind(this));
    app.use('/api/vendors', router);
  }

  public getAll(_: Request, res: Response): void {
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
