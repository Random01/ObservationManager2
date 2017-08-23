export class Entity{
    public id: string;

    constructor(params: { id: string }) {
        Object.assign(this, params);
    }

    public serialize(): string {
        return '';
    }

    public isValid(): boolean{
        return true;
    }
}