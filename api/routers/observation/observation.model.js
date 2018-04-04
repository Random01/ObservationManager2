const Entity = require('./../../common/models/entity');

class Observation extends Entity {
    /**
     * 
     * @param {*} params
     * @param {String} params.id
     */
    constructor(params) {
        super(params);

        this.observer = undefined;
        this.site = undefined;
        this.session = undefined;
        this.target = undefined;
        this.begin = undefined;
        this.end = undefined;
        this.seeing = undefined;
        this.scope = undefined;
        this.eyepieces = undefined;
        this.filters = undefined;
        this.result = undefined;

        if (params) {
            this.observer = params.observer;
            this.site = params.site;
            this.session = params.session;
            this.target = params.target;
            this.begin = params.begin;
            this.end = params.end;
            this.seeing = params.seeing;
            this.scope = params.scope;
            this.eyepieces = params.eyepieces;
            this.filters = params.filters;
            this.result = params.result;
        }
    }
}

module.exports = Observation;