import mongoose from 'mongoose';

import { Site } from './site.interface';
import { SiteSchema } from './site.schema';

export const SiteModel = mongoose.model<Site>('sites', SiteSchema);
