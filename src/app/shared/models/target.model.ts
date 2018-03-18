import { Entity } from './entity.model';
import { TargetType } from './target-type.model';

export class Target extends Entity {

    public name: String;

    public targetType: TargetType;

    public alliases: String[];

    public description: String;

    constructor(params?: {
        id?: string,
        name?: string,
        targetType?: TargetType,
        alliases?: String[],
        description?: String
    }) {
        super(params);
        Object.assign(this, params);
    }
}
