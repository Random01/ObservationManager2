const mongoose = require('mongoose');
const ObservationSchema = require('./observation.schema');

module.exports = mongoose.model('observations', ObservationSchema);