import { Eyepiece } from './../../shared/models/equipment/eyepiece.model';

export const EYEPIECES: Eyepiece[] = [
    new Eyepiece({
        id: 'aaaa',
        model: 'Nagler 31 mm',
        vendor: 'TeleVue',
        focalLength: 31.0,
        apparentFOV: 82.0
    }),
    new Eyepiece({
        id: 'bbbb',
        model: 'Panoptic 35 mm',
        vendor: 'TeleVue',
        focalLength: 35.0,
        apparentFOV: 65.0
    })
];
