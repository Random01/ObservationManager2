import mongoose from 'mongoose';

import { ObservationSchema } from './observation.schema';

export const ObservationModel = mongoose.model('observations', ObservationSchema);
