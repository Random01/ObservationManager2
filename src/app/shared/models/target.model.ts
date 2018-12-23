import { Entity } from './entity.model';
import { TargetType } from './target-type.model';
import { Constellation } from './constellation.mode';
import { EquatorialCoordinates } from './equatorial-coordinates.model';

export class Target extends Entity {

    //  most common name
    public name: string;

    public targetType: TargetType;

    // alternative names
    public alliases: string[];

    // notes on targets
    public description: string;

    // constellation is optional because it can be derived from position
    public constellation: Constellation;

    public position: EquatorialCoordinates;

    constructor(params?: {
        id?: string,
        name?: string,
        targetType?: TargetType,
        alliases?: string[],
        description?: string,
        constellation?: Constellation,
        position?: EquatorialCoordinates
    }) {
        super(params);
        Object.assign(this, params);
    }

    serialize(): Object {
        return Object.assign(super.serialize(), this, {
            name: this.name,
            targetType: this.targetType,
            alliases: this.alliases,
            constelation: this.constellation ? this.constellation.serialize() : null,
            position: this.position ? this.position.serialize() : null
        });
    }
}
