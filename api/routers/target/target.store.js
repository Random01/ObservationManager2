const TargetSchema = require('./target.schema');
const BaseMongooseStore = require('./../common/baseMongoose.store');
const TargetCsvLoader = require('./target-csv-loader.service');

const _ = require('lodash');

class TargetStore extends BaseMongooseStore {

    constructor(db) {
        super(db.model('targets', TargetSchema));
    }

    getById({ id, userId }) {
        return super.getById({
            id,
            userId,
            populationDetails: [
                ['userCreated', '_id userName firstName lastName'],
                ['userModified', '_id userName firstName lastName']
            ]
        });
    }

    getItems({ requestParams }) {
        return super.getItems(
            Object.assign({}, { requestParams }, { populationDetails: [
                ['userCreated', '_id userName firstName lastName'],
                ['userModified', '_id userName firstName lastName'],
                ['site', '_id name']
            ]}));
    }

    search({
        name,
        maxCount = 10
    } = {}) {
        return new Promise((success, fail) => {
            this.model
                .find({ name: new RegExp(name) })
                .limit(maxCount)
                .exec((err, docs) => {
                    if (err) {
                        fail(err);
                    } else {
                        success(docs);
                    }
                });
        });
    }

    upload() {
        const loader = new TargetCsvLoader();
        return loader.load().then((targets) => {
            return new Promise((success, fail) => {
                this.model.insertMany(targets, function (err) {
                    if (err) {
                        fail(err);
                    } else {
                        success();
                    }
                });
            });
        });
    }

    loadAllTargetsFromDb() {
        return new Promise((success, fail) => {
            this.model
                .find()
                .exec((err, docs) => {
                    if (err) {
                        fail(err);
                    } else {
                        success(docs);
                    }
                });
        });
    }

    loadTargetsFromCsv() {
        return (new TargetCsvLoader()).load();
    }

}

module.exports = TargetStore;
