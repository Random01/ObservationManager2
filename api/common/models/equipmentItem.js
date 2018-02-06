class EquipmentItem {

    constructor(params) {
        this.id = null;
        this.model = null;
        this.vendor = null;

        if(params) {
            this.id = params.id;
            this.model = params.model;
            this.vendor = params.vendor;
        }
    }
}

module.exports = EquipmentItem;