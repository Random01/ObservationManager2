const EqipmentItem = require('./../../common/models/EquipmentItem');

class Scope extends EqipmentItem {
    /**
     * 
     * @param {*} params
     * @param {String} params.id
     */
    constructor(params) {
        super(params);

        this.aperture = null;
        this.focalLength = null;

        if(params){
            this.aperture = params.aperture;
            this.focalLength = params.focalLength;
        }
    }
}

module.exports = Scope;