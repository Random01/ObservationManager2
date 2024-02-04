import { model } from 'mongoose';

import { TargetSchema } from './target.schema';

export const TargetModel = model('targets', TargetSchema);
