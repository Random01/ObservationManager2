import mongoose from 'mongoose';

import { FilterSchema } from './filter.schema';
import { Filter }  from './filter.interface';

export const FilterModel = mongoose.model<Filter>('filters', FilterSchema);
