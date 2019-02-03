const ConstellationSchema = require('./constellation.schema');
const CsvReader = require('./../../common/services/csvReader');
const config = require('../../data/data');
const BaseMongooseStore = require('./../common/baseMongoose.store');
const _ = require('lodash');

class ConstellationStore extends BaseMongooseStore {

    constructor(db) {
        super(db.model('constellations', ConstellationSchema));
    }

    async loadFromCsv() {
        const reader = new CsvReader({
            path: config.constellationsCsvFilePath
        });

        const data = await reader.read({ separator: ',' });
        return _.map(data.rows, (row) => {
            const [SNo, Constellation, IAU] = row;
            return {
                name: Constellation,
                code: IAU
            };
        });
    }

    async upload() {
        const constellations = await this.loadFromCsv();
        return new Promise((success, fail) => {
            this.model.insertMany(constellations, (err) => {
                if (err) {
                    fail(err);
                } else {
                    success();
                }
            });
        });
    }

    getItems({ requestParams }) {
        // do not use authentication here as constellations available for all users.
        return super.getItems(Object.assign({}, { requestParams }));
    }

}

module.exports = ConstellationStore;