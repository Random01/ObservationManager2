const Entity = require('./entity.model');

class EquipmentItem extends Entity {

    constructor(params) {
        super(params);

        this.model = undefined;
        this.vendor = undefined;

        if (params) {
            if (params.hasOwnProperty('model')) {
                this.model = params.model;
            }
            if (params.hasOwnProperty('vendor')) {
                this.vendor = params.vendor;
            }
        }
    }
}

module.exports = EquipmentItem;