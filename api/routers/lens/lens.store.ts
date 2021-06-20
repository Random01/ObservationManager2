import { Connection } from 'mongoose';

import { BaseMongooseStore } from '../common';

import { LensSchema } from './lens.schema';

export class LensStore extends BaseMongooseStore<any, any> {

    constructor(db: Connection) {
        super(db.model('lenses', LensSchema));
    }

    public getById({ id, userId }) {
        return super.getById({
            id,
            userId,
            populationDetails: [
                ['userCreated', '_id userName firstName lastName'],
                ['userModified', '_id userName firstName lastName'],
            ],
        });
    }

    public getAll(): Promise<any[]> {
        return new Promise((success, fail) => {
            this.model
                .find()
                .populate('userCreated')
                .populate('userModified')
                .exec((err: Error, docs: any[]) => {
                    if (err) {
                        fail(err);
                    } else {
                        success(docs);
                    }
                });
        });
    }

}
