class Eyepiece {
    constructor(params) {
        if (params) {
            
            this.id = params.id;
            this.model = params.model;
            this.vendor = params.vendor;
            // Focal Length (mm)
            this.focalLength = params.focalLength;
            // Apparent Field of View (deg)
            this.apparentFOV = params.apparentFOV;
        }
    }
}

module.exports = Eyepiece;