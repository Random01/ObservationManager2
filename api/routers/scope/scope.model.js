const mongoose = require('mongoose');
const ScopeSchema = require('./scope.schema');

module.exports = mongoose.model('scopes', ScopeSchema);