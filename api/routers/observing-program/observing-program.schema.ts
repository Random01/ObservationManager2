import { ObjectId } from 'mongodb';

import { Schema } from 'mongoose';

import { EntitySchema } from '../common/schemas';

export const ObservingProgramSchema = new Schema({
  ...EntitySchema,

  name: {
    type: String,
    required: true,
  },
  description: String,
  targets: [{
    type: Schema.Types.ObjectId,
    ref: 'targets',
  }],
});

ObservingProgramSchema.statics.getById = function (id: string): Promise<any> {
  return this.findOne({ _id: new ObjectId(id) })
    .populate('targets _id name')
    .exec();
};
