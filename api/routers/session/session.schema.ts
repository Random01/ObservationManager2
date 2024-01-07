import { Schema, SchemaTypes } from 'mongoose';

import { EntitySchema } from '../common/schemas';

export const SessionSchema = new Schema({
  ...EntitySchema,

  begin: {
    type: Date,
  },
  end: {
    type: Date,
  },
  comments: {
    type: String,
    maxlength: 1024,
  },
  weather: {
    type: String,
    maxlength: 1024,
  },
  equipment: {
    type: String,
    maxlength: 1024,
  },
  site: {
    type: SchemaTypes.ObjectId,
    ref: 'sites',
  },
});
