import { Site } from '../site';
import { Entity } from '../common';
import { Session } from '../session';
import { Scope } from '../scope';
import { Eyepiece } from '../eyepiece';

export interface Observation extends Entity {
    begin: Date;
    end: Date;
    seeing: number;
    site: Partial<Site>;
    session: Partial<Session>;
    target: Partial<any>;
    scope: Partial<Scope>;
    eyepiece: Partial<Eyepiece>;
    result: {
        description: string;
    };
}
