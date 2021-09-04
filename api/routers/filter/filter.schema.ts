import { Schema } from 'mongoose';

import { EquipmentEntitySchema } from '../common/schemas';

export const FilterSchema = new Schema({
    ...EquipmentEntitySchema,
    filterType: {
        type: String,
        maxlength: 30,
    },
});
