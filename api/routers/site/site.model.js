const Entity = require('./../../common/models/Entity');

class Site extends Entity {

    constructor(params) {
        super(params);

        this.name = undefined;
        this.timezone = undefined;
        this.longitude = undefined;
        this.latitude = undefined;
        this.elevation = undefined;
        this.code = undefined;

        if (params) {
            if (params.hasOwnProperty('name')) {
                this.name = params.name;
            }
            if (params.hasOwnProperty('timezone')) {
                this.timezone = params.timezone;
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
            if (params.hasOwnProperty('code')) {
                this.code = params.code;
            }
        }
    }
}

module.exports = Site;