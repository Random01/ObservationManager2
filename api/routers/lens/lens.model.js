const mongoose = require('mongoose');
const LensSchema = require('./lens.schema');

module.exports = mongoose.model('lenses', LensSchema);