import { ObjectID } from 'mongodb';

import { Schema } from 'mongoose';

export const ObservingProgramSchema = new Schema({
    dateCreated: Date,
    dateModified: Date,
    userCreated: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    userModified: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },

    name: String,
    description: String,
    targets: [{
        type: Schema.Types.ObjectId,
        ref: 'targets',
    }],
});

ObservingProgramSchema.statics.getById = function (id: string): Promise<any> {
    return new Promise((success, fail) => {
        this.findOne({
            _id: new ObjectID(id),
        })
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
