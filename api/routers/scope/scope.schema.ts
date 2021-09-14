import { Schema } from 'mongoose';

import { EquipmentEntitySchema } from '../common/schemas';

export const ScopeSchema = new Schema({
    ...EquipmentEntitySchema,
    aperture: {
        type: Number,
        min: 0,
    },
    focalLength: {
        type: Number,
        min: 0,
    },
});
