﻿import { Entity } from './entity.model';
import { TargetType } from './target-type.model';
import { Constellation } from './constellation.mode';
import { EquatorialCoordinates } from './equatorial-coordinates.model';

export class Target extends Entity {

    /**
     * most common name
     */
    public name: string;

    public type: TargetType;

    /**
     * alternative names
     */
    public alliases: string[];

    /**
     * notes on targets
     */
    public description: string;

    /**
     * constellation is optional because it can be derived from position
     */
    public constellation: Constellation;

    public position: EquatorialCoordinates;

    constructor(params?: Partial<Target>) {
        super(params);

        this.alliases = [];
        this.constellation = new Constellation();
        this.position = new EquatorialCoordinates();

        Object.assign(this, params);
    }

    serialize(): Object {
        return Object.assign(super.serialize(), {
            name: this.name,
            type: this.type,
            alliases: this.alliases,
            description: this.description,
            constellation: this.constellation != null ? this.constellation.code : null,
            position: this.position ? this.position.serialize() : null,
        });
    }

    deserialize(state: any): void {
        super.deserialize(state);

        this.copy(state, [
            'name',
            'type',
            'alliases',
            'description',
        ]);

        this.constellation.deserialize(state.constellation || {});
        this.position.deserialize(state.position || {});
    }

    public isValid(): boolean {
        return this.name != null && this.name.trim().length > 0;
    }
}
