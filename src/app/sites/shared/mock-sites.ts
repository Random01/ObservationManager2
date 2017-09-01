import { Site } from './../../shared/models/site.model';

export const SITES: Site[] = [
    new Site({
        id: 'aaaa',
        name: 'Latuhino',
        timezone: 4,
        longitude: 51,
        latitude: 46,
        elevation: 70,
        code: 0
    }),
    new Site({
        id: 'bbbb',
        name: 'Saratov',
        timezone: 4,
        longitude: 51,
        latitude: 46,
        elevation: 72,
        code: 0
    }),
    new Site({
        id: 'cccc',
        name: 'Mokrous',
        timezone: 4,
        longitude: 51,
        latitude: 46,
        elevation: 72,
        code: 0
    })
];