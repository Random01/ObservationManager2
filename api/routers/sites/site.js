const Entity = require('./../../common/models/Entity');

class Site extends Entity {

    constructor(params) {
        super(params);

        this.name = null;
        this.timezone = null;
        this.longitude = null;
        this.latitude = null;
        this.elevation = null;
        this.code = null;

        if (params) {
            if (params.hasOwnProperty('name')) {
                this.name = params.name;
            }
            if (params.hasOwnProperty('longitude')) {
                this.longitude = params.longitude;
            }
            if (params.hasOwnProperty('latitude')) {
                this.latitude = params.latitude;
            }
            if (params.hasOwnProperty('elevation')) {
                this.elevation = params.elevation;
            }
        }
    }
}

module.exports = Site;