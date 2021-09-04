import { EntitySchema } from './entity.schema';

export const EquipmentEntitySchema = {
    ...EntitySchema,
    model: {
        type: String,
        required: true,
        maxlength: 250,
    },
    vendor: {
        type: String,
        maxlength: 250,
    },
};
