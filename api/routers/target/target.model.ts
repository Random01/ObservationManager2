import mongoose from 'mongoose';

import { TargetSchema } from './target.schema';

export const TargetModel = mongoose.model('targets', TargetSchema);
