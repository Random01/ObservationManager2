import { Scope } from './../../shared/models/equipment/scope.model';

export const SCOPES: Scope[] = [
    new Scope({
        id: 'aaaa',
        model: 'SW254/1200',
        aperture: 254,
        focalLength: 1200
    }),
    new Scope({
        id: 'bbbb',
        model: 'DS90/500',
        aperture: 90,
        focalLength: 500
    })
];