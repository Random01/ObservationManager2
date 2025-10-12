import * as core from 'express-serve-static-core';

import { BaseEntityRouter } from '../common';
import { VendorStore } from './vendor.store';

// todo: use Vendor instead of any
export class VendorRouter extends BaseEntityRouter<any, VendorStore> {
  constructor(router: core.Router, store = new VendorStore()) {
    super(router, store);
  }

  // private getAll(_: Request, res: Response): void {
  //   // todo: should be in DB
  //   res.json([
  //     { name: 'Sky Watcher' },
  //     { name: 'Deep-Sky' },
  //     { name: 'Celestron' },
  //     { name: 'Baader' },
  //     { name: 'Astronomik' },
  //     { name: 'Tele Vue' },
  //     { name: 'Explore Scientific' },
  //     { name: 'Lumicon' },
  //   ]);
  // }
}
