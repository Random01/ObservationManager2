import { Schema } from 'mongoose';

import { Vendor } from './vendor.interface';

export const VendorSchema = new Schema<Vendor>({
  name: String,
});
