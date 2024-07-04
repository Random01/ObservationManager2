import { BaseMongooseStore } from '../common';

import { VendorModel } from './vendor.model';

export class VendorStore extends BaseMongooseStore<typeof VendorModel, any> {
  constructor() {
    super(VendorModel);
  }
}

