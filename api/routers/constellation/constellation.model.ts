import mongoose from 'mongoose';

import { ConstellationSchema } from './constellation.schema';

export const ConstellationModel = mongoose.model('constellations', ConstellationSchema);
