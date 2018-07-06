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
        this.eyepiece = undefined;
        this.filter = undefined;
        this.result = undefined;
        this.lens = undefined;

        if (params) {
            this.observer = params.observer;
            this.site = params.site;
            this.session = params.session;
            this.target = params.target;
            this.begin = params.begin;
            this.end = params.end;
            this.seeing = params.seeing;
            this.scope = params.scope;
            this.eyepiece = params.eyepiece;
            this.filter = params.filter;
            this.result = params.result;
            this.lens = params.lens;
        }
    }

    getModel() {
        return Object.assign(base.getModel(), {
            observer: this.toId(this.observer),
            site: this.toId(this.site),
            session: this.toId(this.id),
            target: this.toId(this.target),
            begin: this.toDate(this.begin),
            end: this.toDate(this.end),
            seeing: this.toNumber(this.seeing),
            scope: this.toId(this.scope),
            eyepiece: this.toId(this.eyepiece),
            filter: this.toId(this.filter),
            lens: this.toId(this.lens),
            result: this.result
        });
    }

}

module.exports = Observation;