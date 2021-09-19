import { ObjectId } from 'mongodb';

import { Schema } from 'mongoose';

import { EntitySchema } from '../common/schemas';

export const ObservingProgramSchema = new Schema({
  ...EntitySchema,

  name: String,
  description: String,
  targets: [{
    type: Schema.Types.ObjectId,
    ref: 'targets',
  }],
});

ObservingProgramSchema.statics.getById = function (id: string): Promise<any> {
  return new Promise((success, fail) => {
    this.findOne({ _id: new ObjectId(id) })
      .populate('targets _id name')
      .exec((err: Error, observingProgram: any) => {
        if (err) {
          fail(err);
        } else {
          success(observingProgram);
        }
      });
  });
};
