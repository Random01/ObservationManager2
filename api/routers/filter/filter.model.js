const mongoose = require('mongoose');
const FilterSchema = require('./filter.schema');

module.exports = mongoose.model('filters', FilterSchema);