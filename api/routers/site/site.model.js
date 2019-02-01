const mongoose = require('mongoose');
const SiteSchema = require('./site.schema');

module.exports = mongoose.model('sites', SiteSchema);