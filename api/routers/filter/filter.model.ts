import { model } from 'mongoose';

import { FilterSchema } from './filter.schema';

export const FilterModel = model('filters', FilterSchema);
