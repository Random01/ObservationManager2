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

    getAll() {
        // do not use authentication here as constellations available for all users.
        return new Promise((success, fail) => {
            this.model.find({}, (err, docs) => {
                if (err) {
                    fail(err);
                } else {
                    success(docs);
                }
            });
        });
    }
}

module.exports = ConstellationStore;