const EquipmentItem = require('./../../common/models/EquipmentItem');

class Eyepiece extends EquipmentItem {
    constructor(params) {
        super(params);

        this.focalLength = null;
        this.apparentFOV = null;
        if (params) {
            // Focal Length (mm)
            this.focalLength = params.focalLength;
            // Apparent Field of View (deg)
            this.apparentFOV = params.apparentFOV;
        }
    }
}

module.exports = Eyepiece;