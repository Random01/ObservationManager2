import { model } from 'mongoose';

import { VendorSchema } from './vendor.schema';

export const VendorModel = model('vendors', VendorSchema);
