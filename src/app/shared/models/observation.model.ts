import { Entity } from './entity.model'
import { Scope } from './scope.model'
import { Result } from './result.model'

export class Observation extends Entity {
    // WHO observed it ?
    public observer: string;
    // WHERE was observed ?
    public site: string;
    public session: string;
    // <!-- WHAT was observed ? -->
    public target: string;
    public begin: Date;

    public seeing: string;
    // <!-- scope used for the observation -->
    public scope: Scope;
    // <!-- accessories used -->
    public accessories: string;
    public result: Result;

    constructor(params: {
        id: string,
        observer: string
    }) {
        super(params);
        Object.assign(this, params);
    }
}