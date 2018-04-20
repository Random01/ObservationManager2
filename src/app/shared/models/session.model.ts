import { Entity } from './entity.model';
import { Site } from './site.model';

// <!-- common remarks or conditions of observations conducted during one night/session -->
export class Session extends Entity {
    // Start of observation session
    public begin: Date;
    // End of observation session
    public end: Date;
    // Site where session took place
    public site: Site;
    // Comments on the (optical or electronical) equipment used
    public equipment: string;
    // Any other comments
    public comments: string;
    // Comments about the weather situation
    public weather: string;

    constructor(params?: {
        id?: string,
        begin?: Date,
        end?: Date,
        site?: Site,
        equipment?: string,
        comments?: string,
        weather?: string
    }) {
        super(params);

        this.site = new Site();
        Object.assign(this, params);
    }

    serialize(): Object {
        const state: any = Object.assign(super.serialize(), this);

        state.site = (this.site != null && this.site.id != null)
            ? this.site.id : undefined;

        return state;
    }
}
