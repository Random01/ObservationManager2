const mongoose = require('mongoose');
const ObservationSchema = require('./observation.schema');

const observationsModel =  mongoose.model('observations', ObservationSchema);

module.exports = observationsModel;