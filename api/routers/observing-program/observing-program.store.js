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

    getOverallStatistics({
        id,
        userId
    }) {
        return this.model
            .getById(id)
            .then((observingProgram) => {
                return Promise.all([
                    observingProgram.targets,
                    ObservationModel.getByTargets(targets)
                ]);
            }).then(([targets, observations]) => {
                const observationsToTarget = _.groupBy(observations, (o) => o.target);
                const observedTargets = _.filter(targets, (target) => !!observationsToTarget[target.id]);

                return observedTargets.length / target.length;
            });
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
                const startIndex = page * size;
                const targets = observingProgram.targets.slice(startIndex, startIndex + size);

                return Promise.all([
                    targets,
                    ObservationModel.getByTargets(targets),
                    observingProgram.targets.length
                ]);
            })
            .then(([targets, observations, totalCount]) => {
                const observationsToTarget = _.groupBy(observations, (o) => o.target);
                const targetsStatistics = targets.map((target) => {
                    return {
                        target,
                        observations: observationsToTarget[target.id]
                    }
                });

                return {
                    items: targetsStatistics,
                    pageCount: page != null ? page : 0,
                    pages: size != null ? Math.ceil(totalCount / size) : 1,
                    totalCount
                };
            });
    }

}

module.exports = ObservingProgramStore;
