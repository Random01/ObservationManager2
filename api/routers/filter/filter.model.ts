import mongoose from 'mongoose';

import { FilterSchema } from './filter.schema';

export const FilterModel = mongoose.model('filters', FilterSchema);
