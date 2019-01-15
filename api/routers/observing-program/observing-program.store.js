const ObservingProgramSchema = require('./observing-program.schema');
const BaseMongooseStore = require('./../common/baseMongoose.store');

class ObservingProgramStore extends BaseMongooseStore {

    constructor(db) {
        super(db.model('observing-programs', ObservingProgramSchema));
    }

    getById({ id }) {
        return super.getById({
            id, populationDetails: [
                ['userCreated', '_id userName firstName lastName'],
                ['userModified', '_id userName firstName lastName'],
                ['targets', '_id name']
            ]
        });
    }

    /**
     * @param {Array.<Object>} targets 
     * @returns {Promise}
     */
    uploadProgram({ targets }) {

    }

    /**
     * Returns a list of observed objects
     * @param {Object} param
     * @param {String} param.id - Observing Program Id.
     * @param {String} param.userId - User Id.
     * @returns {Promise}
     */
    getStatistics({ id, userId }) {
        return new Promise((success, fail) => {

            

        });
    }

}

module.exports = ObservingProgramStore;