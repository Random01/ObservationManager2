import { Schema } from 'mongoose';

import { EntitySchema } from '../common/schemas';

export const TargetSchema = new Schema({
    ...EntitySchema,

    name: String,
    aliases: [String],
    description: String,
    type: String,
    position: {
        ra: Number,
        dec: Number,
    },
    constellation: String,
    visMag: Number,
    surfBr: Number,
    magStar: Number,
});

/**
 * @param {String} name
 * @returns {Promise}
 */
TargetSchema.statics.findByName = function (name: string): Promise<any> {
    return new Promise((success, fail) => {
        this.find({
            name: new RegExp(name, 'i'),
        }, (err, targets) => {
            if (err) {
                fail(err);
            } else {
                success(targets);
            }
        });
    });
};

TargetSchema.statics.findByNames = function (names: string[]) {
    return new Promise((success, fail) => {
        this.find({
            name: {
                '$in': names.map(name => name),
            },
        }, (err, targets) => {
            if (err) {
                fail(err);
            } else {
                success(targets);
            }
        });
    });
};
