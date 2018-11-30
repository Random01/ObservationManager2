const FilterSchema = require('./filter.schema');
const BaseMongooseStore = require('./../common/baseMongoose.store');

class FilterStore extends BaseMongooseStore {
    constructor(db) {
        super(db.model('filters', FilterSchema));
    }

    getById({ id }) {
        return super.getById({ id, populationDetails: [
            ['userCreated', '_id userName firstName lastName'],
            ['userModified', '_id userName firstName lastName']
        ]});
    }
    
}

module.exports = FilterStore;