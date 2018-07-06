const EyepieceSchema = require('./eyepiece.schema');
const BaseMongooseStore = require('./../common/baseMongoose.store');

class EyepieceStore extends BaseMongooseStore {

    constructor(db) {
        super(db.model('eyepieces', EyepieceSchema));
    }

    getById(id) {
        return new Promise((success, fail) => {
            this.model
                .findOne({ _id: id })
                .populate('userCreated')
                .populate('userModified')
                .exec((err, docs) => {
                    if (err) {
                        fail(err);
                    } else {
                        success(docs);
                    }
                });
        });
    }
    
}

module.exports = EyepieceStore;