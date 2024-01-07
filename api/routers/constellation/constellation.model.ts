import { model } from 'mongoose';

import { ConstellationSchema } from './constellation.schema';

export const ConstellationModel = model('constellations', ConstellationSchema);
