import { model } from 'mongoose';

import { LensSchema } from './lens.schema';

export const LensModel = model('lenses', LensSchema);
