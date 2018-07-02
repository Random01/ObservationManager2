export class Entity {

    public id?: string = undefined;

    constructor(params?: { id?: string }) {
        Object.assign(this, params);
    }

    public serialize(): Object {
        return { id: this.id };
    }

    public isValid(): boolean {
        return this.id != null;
    }
}
