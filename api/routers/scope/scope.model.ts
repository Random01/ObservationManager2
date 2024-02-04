import { model } from 'mongoose';

import { ScopeSchema } from './scope.schema';

export const ScopeModel = model('scopes', ScopeSchema);
