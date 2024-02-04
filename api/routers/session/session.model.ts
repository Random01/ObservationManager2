import {model} from 'mongoose';

import { SessionSchema } from './session.schema';

export const SessionModel = model('sessions', SessionSchema);
