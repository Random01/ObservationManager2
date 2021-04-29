import { Connection } from 'mongoose';

import { DataConfig } from '../../data';

import { BaseMongooseStore } from '../common';

import { CsvReader } from './../../common/services/csv-reader';
import { Constellation } from './constellation.entity';

import { ConstellationSchema } from './constellation.schema';

export class ConstellationStore extends BaseMongooseStore<any, any> {

    constructor(db: Connection) {
        super(db.model('constellations', ConstellationSchema));
    }

    private async loadFromCsv(): Promise<Constellation[]> {
        const reader = new CsvReader({
            path: DataConfig.constellationsCsvFilePath,
        });

        const data = await reader.read({ separator: ',' }) as any;
        return data.rows.map((row: any) => {
            const [_, constellation, IAU] = row;
            return {
                name: constellation,
                code: IAU,
            } as Constellation;
        });
    }

    public async upload() {
        const constellations = await this.loadFromCsv();
        return new Promise((success, fail) => {
            this.model.insertMany(constellations, (err: Error) => {
                if (err) {
                    fail(err);
                } else {
                    success(undefined);
                }
            });
        });
    }

}
