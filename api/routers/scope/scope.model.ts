import mongoose from 'mongoose';

import { Scope } from './scope.interface';
import { ScopeSchema } from './scope.schema';

export const ScopeModel = mongoose.model<Scope>('scopes', ScopeSchema);
