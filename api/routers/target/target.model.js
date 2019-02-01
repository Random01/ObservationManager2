const mongoose = require('mongoose');
const TargetSchema = require('./target.schema');

module.exports = mongoose.model('targets', TargetSchema);