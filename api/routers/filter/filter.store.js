const FilterSchema = require('./filter.schema');
const BaseMongooseStore = require('./../common/baseMongoose.store');


class FilterStore extends BaseMongooseStore {

    constructor(db) {
        super(db.model('filters', FilterSchema));
    }

}

module.exports = FilterStore;