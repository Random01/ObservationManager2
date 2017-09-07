import { Target } from './../../shared/models/models';

export const TARGETS: Target[] = [
    new Target({
        id: 'aaaa',
        name: 'M1'
    }),
    new Target({
        id: 'bbbb',
        name: 'M2',
    }),
    new Target({
        id: 'aaaa',
        name: 'M31',
        alliases: ['Andromeda Galaxy']
    }),
    new Target({
        id: 'bbbb',
        name: 'M57',
        alliases: ['Ring']
    })
];