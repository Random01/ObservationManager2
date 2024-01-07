import { model } from 'mongoose';

import { ObservationSchema } from './observation.schema';

export const ObservationModel = model('observations', ObservationSchema);
