import mongoose from 'mongoose';

import { Lens } from './lens.interface';
import { LensSchema } from './lens.schema';

export const LensModel = mongoose.model<Lens>('lenses', LensSchema);
