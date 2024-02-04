import { model } from 'mongoose';

import { SiteSchema } from './site.schema';

export const SiteModel = model('sites', SiteSchema);
