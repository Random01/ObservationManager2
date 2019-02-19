const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FilterSchema = new Schema({
    dateCreated: Date,
    dateModified: Date,
    
    userCreated: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    userModified: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    
    model: {
        type: String,
        required: true,
        maxlength: 250
    },
    vendor: {
        type: String,
        maxlength: 250
    },
    filterType: {
        type: String,
        maxlength: 30
    }
});

module.exports = FilterSchema;