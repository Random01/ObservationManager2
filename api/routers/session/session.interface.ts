import { Site } from '../site';
import { Entity } from '../common';
import { Lens } from '../lens';
import { Filter } from '../filter';
import { Eyepiece } from '../eyepiece';
import { Scope } from '../scope';

export interface Session extends Entity {
    begin: Date;
    end: Date;
    comments: string;
    weather: string;
    equipment: string;
    site: Partial<Site>;
    scope: Partial<Scope>;
    eyepiece: Partial<Eyepiece>;
    filter: Partial<Filter>;
    lens: Partial<Lens>;
    result: {
        description: string;
    };
    faintestStar: number;
    skyQuality: number;
    magnification: number;
}
