import mongoose from 'mongoose';

import { ScopeSchema } from './scope.schema';

export const ScopeModel = mongoose.model('scopes', ScopeSchema);
