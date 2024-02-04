import { model } from 'mongoose';

import { ObservingProgramSchema } from './observing-program.schema';

export const ObservingProgramModel = model('observing-programs', ObservingProgramSchema);
