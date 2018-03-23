import { Session } from './../../shared/models/session.model';
import { Site } from '../../shared/models/models';

export const SESSIONS: Session[] = [
    new Session({
        id: 'aaaa',
        begin: new Date(2017, 10, 23),
        end: new Date(2017, 10, 24),
        site: new Site({
            id: 'aaaa',
            name: 'Lipovka'
        }),
        weather: 'Nice weather conditions'
    }),
    new Session({
        id: 'bbbb',
        begin: new Date(2018, 1, 11),
        end: new Date(2018, 1, 12),
        site: new Site({
            id: 'aaaa',
            name: 'Lipovka'
        }),
        weather: 'Superb weather conditions'
    })
];
