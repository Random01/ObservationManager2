import { Serializable } from '../interfaces/serializable.interface';

export class PositionAngle implements Serializable {

    public unit: number;

    constructor(params?: Partial<PositionAngle>) {
        Object.assign(this, params);
    }

    public serialize(): Object {
        return { unit: this.unit };
    }

    public deserialize(params: any): void {
        this.unit = params.unit;
    }

}
