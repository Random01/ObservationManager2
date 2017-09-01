import { Entity } from './entity.model';
import { TargetType } from './target-type.model';

export class Target extends Entity {

    name: String;

    targetType: TargetType;

    alliases: String[];

    constructor(params: {
        id: string,
        name: string,
        targetType?: TargetType,
        alliases?: String[]
    }) {
        super(params);
        Object.assign(this, params);
    }
}