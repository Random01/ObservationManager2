const ObservingProgramSchema = require('./observing-program.schema');
const ObservationModel = require('./../observation/observation.model');
const BaseMongooseStore = require('./../common/baseMongoose.store');
const _ = require('lodash');

class ObservingProgramStore extends BaseMongooseStore {

    constructor(db) {
        super(db.model('observing-programs', ObservingProgramSchema));
    }

    getById({
        id
    }) {
        return super.getById({
            id,
            populationDetails: [
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
    uploadProgram({
        targets
    }) {

    }

    /**
     * Returns a list of observed objects
     * @param {Object} param
     * @param {String} param.id - Observing Program Id.
     * @param {String} param.userId - User Id.
     * @returns {Promise}
     */
    getStatistics({
        id,
        userId,
        page,
        size
    }) {
        return this.model
            .getById(id)
            .then((observingProgram) => {
                const targets = observingProgram.targets.splice(page * size, page * size + size);

                return Promise.all([
                    targets,
                    ObservationModel.getByTargets(targets)
                ]);
            })
            .then(([targets, observations]) => {
                const observationsToTarget = _.groupBy(observations, (o) => o.target);

                return targets.map((target) => {
                    return {
                        target,
                        observations: observationsToTarget[target]
                    }
                });
            });
    }

}

module.exports = ObservingProgramStore;
