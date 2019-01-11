﻿import { Entity } from './entity.model';
import { Site } from './site.model';

/**
 * Common remarks or conditions of observations conducted during one night/session.
 */
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

    public serialize(): Object {
        return Object.assign(super.serialize(), {
            begin: this.serializeDate(this.begin),
            end: this.serializeDate(this.end),
            equipment: this.equipment,
            comments: this.comments,
            weather: this.weather,
            site: this.serializeEntity(this.site)
        });
    }

    public deserialize(state: any): void {
        super.deserialize(state);

        this.begin = this.parseDate(state.begin);
        this.end = this.parseDate(state.end);

        this.copy(state, [
            'site',
            'equipment',
            'comments',
            'weather'
        ]);
    }
}
