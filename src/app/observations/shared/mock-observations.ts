import { Observation, Observer, Site, Session, Scope } from './../../shared/models/models';

export const OBSERVATIONS: Observation[] = [
    new Observation({
        id: 'aaaa',
        observer: new Observer(),
        site: new Site(),
        session: new Session(),
        scope: new Scope()
    })
];