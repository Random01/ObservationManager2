const Entity = require('./../../common/models/Entity');

class Target extends Entity {

    constructor(params) {
        super(params);

        this.name = undefined;
        this.targetType = undefined;
        this.alliases = undefined;
        this.description = undefined;

        if (params) {
            if (params.hasOwnProperty('name')) {
                this.name = params.name;
            }
            if (params.hasOwnProperty('targetType')) {
                this.targetType = params.targetType;
            }
            if (params.hasOwnProperty('alliases')) {
                this.alliases = params.alliases;
            }
            if (params.hasOwnProperty('description')) {
                this.description = params.description;
            }
        }
    }
}

module.exports = Target;