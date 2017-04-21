export class Entity{
    public id: string;

    constructor(params: { id: string }) {
        Object.assign(params);
    }

    public serialize(): string {
        return '';
    }
}