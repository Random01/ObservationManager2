import mongoose from 'mongoose';

import { SiteSchema } from './site.schema';

export const SiteModel = mongoose.model('sites', SiteSchema);
