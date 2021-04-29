import mongoose from 'mongoose';

import { ObservingProgramSchema } from './observing-program.schema';

export const ObservingProgramModel = mongoose.model('observing-programs', ObservingProgramSchema);
