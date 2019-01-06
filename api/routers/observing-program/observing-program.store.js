const ObservingProgramSchema = require('./observing-program.schema');
const BaseMongooseStore = require('./../common/baseMongoose.store');

class ObservingProgramStore extends BaseMongooseStore {

    constructor(db) {
        super(db.model('observing-programs', ObservingProgramSchema));
    }

    getById({ id }) {
        return super.getById({ id, populationDetails: [
            ['userCreated', '_id userName firstName lastName'],
            ['userModified', '_id userName firstName lastName'],
            ['targets', '_id name']
        ]});
    }

}

module.exports = ObservingProgramStore;