import mongoose from 'mongoose';

import { ObservingProgram } from './observing-program.interface';
import { ObservingProgramSchema } from './observing-program.schema';

export const ObservingProgramModel = mongoose.model<ObservingProgram>('observing-programs', ObservingProgramSchema);
