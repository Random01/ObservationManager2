import { Entity } from './entity.model';
import { Site } from './site.model';

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
}
