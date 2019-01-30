const mongoose = require('mongoose');
const TargetSchema = require('./target.schema');

const targetsModel = mongoose.model('targets', TargetSchema);

module.exports = targetsModel;