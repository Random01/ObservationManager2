export class PositionAngle {

    public unit: number;

    constructor(params: {
        unit?: number
    }) {
        Object.assign(this, params);
    }

    serialize(): Object {
        return { unit: this.unit };
    }
}
