const Entity = require('./entity');

class EquipmentItem extends Entity {

    constructor(params) {
        super(params);

        this.model = null;
        this.vendor = null;

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