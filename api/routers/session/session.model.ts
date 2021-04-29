import mongoose from 'mongoose';

import { SessionSchema } from './session.schema';

export const SessionModel = mongoose.model('sessions', SessionSchema);
