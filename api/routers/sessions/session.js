const Entity = require('./../../common/models/entity');

class Session extends Entity {
    /**
     * 
     * @param {*} params
     * @param {String} params.id
     */
    constructor(params) {
        super(params);

        if (params) {
            this.begin = params.begin;
            this.end = params.end;
            this.site = params.site;
            this.comments = params.comments;
            this.weather = params.weather;
        }
    }
}

module.exports = Session;