import { Entity } from './entity.model';
import { TargetType } from './target-type.model';
import { Constellation } from './constellation.mode';

export class Target extends Entity {

    public name: string;

    public targetType: TargetType;

    public alliases: string[];

    public description: string;

    public constellation: Constellation;

    constructor(params?: {
        id?: string,
        name?: string,
        targetType?: TargetType,
        alliases?: string[],
        description?: string,
        constellation?: Constellation
    }) {
        super(params);
        Object.assign(this, params);
    }

    serialize(): Object {
        return Object.assign(super.serialize(), this);
    }
}
