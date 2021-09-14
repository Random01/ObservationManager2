import { Schema } from 'mongoose';

import { EntitySchema } from '../common/schemas';

export const SiteSchema = new Schema({
    ...EntitySchema,

    name: {
        type: String,
        required: true,
        maxlength: 250,
    },
    timezone: Number,
    longitude: Number,
    latitude: Number,
    elevation: Number,
    code: {
        type: String,
        maxlength: 250,
    }
});
