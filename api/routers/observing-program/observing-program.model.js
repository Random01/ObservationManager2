const mongoose = require('mongoose');
const ObservingProgramSchema = require('./observing-program.schema');

module.exports =  mongoose.model('observing-programs', ObservingProgramSchema);