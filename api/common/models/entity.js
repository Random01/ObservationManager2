class Entity {
    constructor(params) {
        this.id = null;
        this.dateCreated = null;
        this.dateModified = null;
        this.userCreated = null;
        this.userModified = null;

        if (params) {
            if (params.hasOwnProperty('id')) {
                this.id = params.id;
            }
            if (params.hasOwnProperty('dateCreated')) {
                this.dateCreated = params.dateCreated;
            }
            if (params.hasOwnProperty('dateModified')) {
                this.dateModified = params.dateModified;
            }
            if (params.hasOwnProperty('userCreated')) {
                this.userCreated = params.userCreated;
            }
            if (params.hasOwnProperty('userModified')) {
                this.userModified = params.userModified;
            }
        }
    }
}

module.exports = Entity;