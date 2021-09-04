import { Schema } from 'mongoose';

import { EquipmentEntitySchema } from '../common/schemas';

export const EyepieceSchema = new Schema({
    ...EquipmentEntitySchema,
    focalLength: {
        type: Number,
        min: 0,
    },
    maxFocalLength: {
        type: Number,
        min: 0,
    },
    apparentFOV: {
        type: Number,
        min: 0,
    }
});
