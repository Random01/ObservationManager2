import { Connection } from 'mongoose';

import { BaseMongooseStore } from '../common';

import { TargetCsvLoader } from './target-csv-loader.service';
import { Target } from './target.interface';
import { TargetSchema } from './target.schema';

export class TargetStore extends BaseMongooseStore<any, Target> {

    constructor(db: Connection) {
        super(db.model('targets', TargetSchema));
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

    public getItems({ requestParameters }) {
        return super.getItems({
            requestParameters,
            populationDetails: [
                ['userCreated', '_id userName firstName lastName'],
                ['userModified', '_id userName firstName lastName'],
                ['site', '_id name'],
            ],
        });
    }

    public search(params: { name: string; maxCount: number }): Promise<Target[]> {
        const { name, maxCount = 10 } = params;

        return new Promise((success, fail) => {
            this.model
                .find({ name: new RegExp(name) })
                .limit(maxCount)
                .exec((err: Error, docs: any) => {
                    if (err) {
                        fail(err);
                    } else {
                        success(docs);
                    }
                });
        });
    }

    public upload() {
        const loader = new TargetCsvLoader();
        return loader.load().then(targets =>
            new Promise((success, fail) => {
                this.model.insertMany(targets, (err: Error) => {
                    if (err) {
                        fail(err);
                    } else {
                        success(undefined);
                    }
                });
            })
        );
    }

    public loadAllTargetsFromDb() {
        return new Promise((success, fail) => {
            this.model
                .find()
                .exec((err: Error, docs: any) => {
                    if (err) {
                        fail(err);
                    } else {
                        success(docs);
                    }
                });
        });
    }

    public loadTargetsFromCsv() {
        return (new TargetCsvLoader()).load();
    }

}
