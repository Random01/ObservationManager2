import mongoose from 'mongoose';

import { Observation } from './observation.interface';
import { ObservationSchema } from './observation.schema';

export const ObservationModel = mongoose.model<Observation>('observations', ObservationSchema);
