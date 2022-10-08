import mongoose from 'mongoose';

import { Session } from './session.interface';
import { SessionSchema } from './session.schema';

export const SessionModel = mongoose.model<Session>('sessions', SessionSchema);
