const Entity = require('./../../common/models/Entity');

class Target extends Entity {

    constructor(params) {
        super(params);

        this.name = undefined;
        this.targetType = undefined;
        this.alliases = undefined;
        this.description = undefined;

        if (params) {
            this.name = params.name;
            this.targetType = params.targetType;
            this.alliases = params.alliases;
            this.description = params.description;
        }
    }
}

module.exports = Target;