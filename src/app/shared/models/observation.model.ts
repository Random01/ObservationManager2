import { Entity } from './entity.model';
import { Result } from './result.model';
import { Target } from './target.model';
import { Observer } from './observer.model';
import { Session } from './session.model';
import { Site } from './site.model';

import { Scope, Eyepiece, Filter, Lens } from './equipment/equipment';

export class Observation extends Entity {
    // WHO observed it ?
    public observer: Observer;
    // WHERE was observed ?
    // site where session took place
    public site: Site;
    // optional session information
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
    //  Barlow/shapley lens used
    public lens: Lens;
    // Descripting of the results of the observations. Future extensions are likely!
    public result: Result;

    constructor(params?: {
        id?: string,
        observer?: Observer,
        site?: Site,
        session?: Session,
        target?: Target,
        begin?: Date,
        end?: Date,
        seeing?: Number,
        scope?: Scope,
        eyepiece?: Eyepiece,
        filter?: Filter,
        lens?: Lens,
        result?: Result
    }) {
        super(params);

        this.observer = new Observer();
        this.target = new Target();
        this.scope = new Scope();
        this.filter = new Filter();
        this.eyepiece = new Eyepiece();
        this.lens = new Lens();
        this.result = new Result();
        this.session = new Session();

        Object.assign(this, params);
    }

    public serialize(): Object {
        return Object.assign(super.serialize(), {
            observer: this.serializeEntity(this.observer),
            site: this.serializeEntity(this.site),
            session: this.serializeEntity(this.session),
            target: this.serializeEntity(this.target),
            begin: this.serializeDate(this.begin),
            end: this.serializeDate(this.end),
            seeing: this.seeing,
            scope: this.serializeEntity(this.scope),
            eyepiece: this.serializeEntity(this.eyepiece),
            filter: this.serializeEntity(this.filter),
            lens: this.serializeEntity(this.lens),
            result: this.result.serialize()
        });
    }

    public deserialize(state: any): void {
        super.deserialize(state);

        this.begin = this.parseDate(state.begin);
        this.end = this.parseDate(state.end);

        this.copy(state, [
            'seeing',
            'observer',
            'target',
            'scope',
            'filter',
            'eyepiece',
            'lens',
            'result',
            'session'
        ]);
    }
}
