import { Site } from '../site';
import { Entity } from '../common';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Observation extends Entity {
    begin: Date;
    end: Date;
    seeing: number;
    site: Partial<Site>;
}
