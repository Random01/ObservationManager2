import { Schema } from 'mongoose';

import { EquipmentEntitySchema } from '../common/schemas';

export const LensSchema = new Schema({
  ...EquipmentEntitySchema,
  factor: Number,
});
