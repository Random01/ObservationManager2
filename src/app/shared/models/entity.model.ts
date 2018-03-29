export class Entity {

    public id: string;

    constructor(params?: { id?: string }) {
        Object.assign(this, params);
    }

    public serialize(): Object {
        return { id: this.id };
    }

    public isValid(): boolean {
        return true;
    }

}
