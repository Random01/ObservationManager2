class Entity {
    constructor(params) {
        this.id = undefined;
        this.dateCreated = undefined;
        this.dateModified = undefined;
        this.userCreated = undefined;
        this.userModified = undefined;

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