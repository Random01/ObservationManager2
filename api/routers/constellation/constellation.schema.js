const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConstellationSchema = new Schema({
    code: String,
    name: String
});

module.exports = ConstellationSchema;