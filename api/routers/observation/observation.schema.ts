import { Schema } from 'mongoose';

import { EntitySchema } from '../common/schemas';

export const ObservationSchema = new Schema({
  ...EntitySchema,

  observer: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  site: {
    type: Schema.Types.ObjectId,
    ref: 'sites',
  },
  session: {
    type: Schema.Types.ObjectId,
    ref: 'sessions',
  },
  target: {
    type: Schema.Types.ObjectId,
    ref: 'targets',
  },
  begin: Date,
  end: Date,
  seeing: Number,
  scope: {
    type: Schema.Types.ObjectId,
    ref: 'scopes',
  },
  eyepiece: {
    type: Schema.Types.ObjectId,
    ref: 'eyepieces',
  },
  filter: {
    type: Schema.Types.ObjectId,
    ref: 'filters',
  },
  lens: {
    type: Schema.Types.ObjectId,
    ref: 'lenses',
  },
  result: {
    description: {
      type: String,
      maxlength: 1024,
    },
  },
  faintestStar: Number,
  skyQuality: Number,
  magnification: Number,
});

ObservationSchema.statics.getByTargets = function (targetIds: string[]): Promise<any[]> {
  return this.find({
    target: {
      '$in': targetIds,
    },
  }).exec();
};
