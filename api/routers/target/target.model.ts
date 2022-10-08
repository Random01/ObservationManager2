import mongoose from 'mongoose';

import { Target } from './target.interface';
import { TargetSchema } from './target.schema';

export const TargetModel = mongoose.model<Target>('targets', TargetSchema);
