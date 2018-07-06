import { Entity } from './entity.model';
import { TargetType } from './target-type.model';

export class Target extends Entity {

    public name: string;

    public targetType: TargetType;

    public alliases: string[];

    public description: string;

    constructor(params?: {
        id?: string,
        name?: string,
        targetType?: TargetType,
        alliases?: string[],
        description?: string
    }) {
        super(params);
        Object.assign(this, params);
    }
}
