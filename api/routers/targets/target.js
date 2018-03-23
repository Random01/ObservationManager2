'use strict';

const Entity = require('./../../common/models/Entity');

class Target extends Entity {

    constructor(params) {
        super(params);

        if (params) {
            this.name = params.name;
            this.targetType = params.targetType;
            this.alliases = params.alliases;
            this.description = params.description;
        }
    }
}

module.exports = Target;