import mongoose from 'mongoose';

import { LensSchema } from './lens.schema';

export const LensModel = mongoose.model('lenses', LensSchema);
