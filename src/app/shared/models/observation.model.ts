import { Entity } from './entity.model'
import { Scope } from './scope.model'
import { Result } from './result.model'
import { Target } from './target.model'
import { Observer } from './observer.model'
import { Session } from './session.model'
import { Site } from './site.model'

export class Observation extends Entity {
    // WHO observed it ?
    public observer: Observer;
    // WHERE was observed ?
    public site: Site;

    public session: Session;
    // <!-- WHAT was observed ? -->
    public target: Target;

    public begin: Date;

    public seeing: string;
    // <!-- scope used for the observation -->
    public scope: Scope;
    // <!-- accessories used -->
    public accessories: string;

    public result: Result;

    constructor(params?: {
        id: string,
        observer?: Observer,
        site?: Site,
        session?: Session,
        target?: Target
    }) {
        super(params);

        this.result = new Result();

        Object.assign(this, params);
    }
}