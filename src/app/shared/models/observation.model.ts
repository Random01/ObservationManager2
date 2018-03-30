import { Entity } from './entity.model';
import { Result } from './result.model';
import { Target } from './target.model';
import { Observer } from './observer.model';
import { Session } from './session.model';
import { Site } from './site.model';

import { Scope, Eyepiece, Filter } from './equipment/equipment';

export class Observation extends Entity {
    // WHO observed it ?
    public observer: Observer;
    // WHERE was observed ?
    // site where session took place
    public site: Site;

    public session: Session;
    // <!-- WHAT was observed ? -->
    public target: Target;

    public begin: Date;

    public seeing: string;
    // <!-- scope used for the observation -->
    public scope: Scope;

    // <!-- accessories used -->
    public eyepieces: Eyepiece[];

    public filters: Filter[];

    public result: Result;

    constructor(params?: {
        id?: string,
        observer?: Observer,
        site?: Site,
        session?: Session,
        target?: Target,
        scope?: Scope,
        begin?: Date,
        result?: Result,
        eyepieces?: Eyepiece[],
        filters?: Filter[]
    }) {
        super(params);

        this.result = new Result();

        Object.assign(this, params);
    }

    serialize(): Object {
        return Object.assign(super.serialize(), {
            target: this.target != null ? this.target.id : undefined,
            site: this.site != null ? this.site.id : undefined,
            session: this.session != null ? this.session.id : undefined,
            scope: this.scope != null ? this.scope.id : undefined,
            result: this.result
        });
    }
}
