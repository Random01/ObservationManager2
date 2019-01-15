const ObservingProgramSchema = require('./observing-program.schema');
const ObservationSchema = require('./../observation/observation.schema');
const BaseMongooseStore = require('./../common/baseMongoose.store');

const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;

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
        userId
    }) {
        return new Promise((success, fail) => {
            this.model.findOne({
                _id: ObjectID(id)
            }).exec((err, observingProgram) => {
                if (err) {
                    fail(err);
                } else {
                    const observationsModel = mongoose.model('observations', ObservationSchema);

                    observationsModel
                        .find({
                            target: {
                                '$in': observingProgram.targets
                            }
                        })
                        .exec((err, observations) => {
                            if (err) {
                                fail(err);
                            } else {
                                success(observations);
                            }
                        });
                }
            });
        });
    }

}

module.exports = ObservingProgramStore;
