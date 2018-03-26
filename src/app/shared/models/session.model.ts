import { Entity } from './entity.model';
import { Site } from './site.model';

// <!-- common remarks or conditions of observations conducted during one night/session -->
export class Session extends Entity {

    public begin: Date;

    public end: Date;

    public site: Site;

    public equipment: string;

    public comments: string;

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
        Object.assign(this, params);
    }

    serialize(): Object {
        return Object.assign(super.serialize(), {
            begin: this.begin,
            end: this.end,
            equipment: this.equipment,
            comments: this.comments,
            weather: this.weather,
            site: this.site != null ? this.site.id : undefined
        });
    }
}
