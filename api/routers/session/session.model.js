const mongoose = require('mongoose');
const SessionSchema = require('./session.schema');

module.exports = mongoose.model('sessions', SessionSchema);
