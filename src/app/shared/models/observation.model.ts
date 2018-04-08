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
    // WHAT was observed
    public target: Target;
    // WHEN was observed ? This may be an instant or an interval of time
    // Start or instant of observation
    public begin: Date;
    // End in case of (exposure) interval
    public end: Date;
    // Seeing rated according to the Antoniadi scale (1=excellent, 5=very poor)
    public seeing: Number;
    // Scope used for the observation
    public scope: Scope;

    // eyepiece used
    public eyepiece: Eyepiece;
    // filter used
    public filter: Filter;
    // Descripting of the results of the observations. Future extensions are likely!
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
        eyepiece?: Eyepiece,
        filter?: Filter
    }) {
        super(params);

        this.result = new Result();

        Object.assign(this, params);
    }

    serialize(): Object {
        return Object.assign(super.serialize(), {
            observer: this.observer != null ? this.observer.id : undefined,
            target: this.target != null ? this.target.id : undefined,
            site: this.site != null ? this.site.id : undefined,
            session: this.session != null ? this.session.id : undefined,
            scope: this.scope != null ? this.scope.id : undefined,
            result: this.result
        });
    }
}
