const mongoose = require('mongoose');
const EyepieceSchema = require('./eyepiece.schema');

module.exports = mongoose.model('eyepieces', EyepieceSchema);