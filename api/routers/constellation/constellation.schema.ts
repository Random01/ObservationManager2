import { Schema } from 'mongoose';

import { Constellation } from './constellation.interface';

export const ConstellationSchema = new Schema<Constellation>({
  code: String,
  name: String,
});
