'use strict';

const EquipmentItem = require('./../../common/models/EquipmentItem');

class Filter extends EquipmentItem {
    constructor(params) {
        super(params);

        this.filterType = undefined;
        
        if (params) {
            this.filterType = params.filterType;
        }
    }
}

module.exports = Filter;