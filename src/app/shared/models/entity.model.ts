export class Entity {

    public id?: string;

    public static empty(): Entity {
        return new Entity();
    }

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
