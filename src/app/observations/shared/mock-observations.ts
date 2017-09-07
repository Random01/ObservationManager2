import { Observation, Observer, Site, Session, Target, Result } from './../../shared/models/models';

export const OBSERVATIONS: Observation[] = [
    new Observation({
        id: 'aaaa',
        observer: new Observer(),
        site: new Site(),
        session: new Session(),
        target: new Target({
            id: 'aaaa',
            name: 'M31'
        }),
        result: new Result({
            description: 'Die Feldteilung in hell/dunkel wurde nach einigen Minuten immer sicherer wahrnehmbar. Der Pferdekopf ist nur als "Fehlstelle" (subjektiv recht groß) in dieser Front zu erahnen. Field sweeping / AV notwenig, alles ziemlich am Limit. In Ermangelung eines H-beta Filters habe ich einen UHC benutzt. NGC 2023 war beim Aufsuchen zur Orientierung hilfreich. Die hellen Feldsterne im 16er Nagler stören etwas, aber im 8,8er UWA war das Bild zu dunkel (keine Hell/Dunkeltrennung durch das Feld erkennbar)'
        }),
        begin: new Date(2005, 10, 1)
    }),
    new Observation({
        id: 'bbbb',
        observer: new Observer(),
        site: new Site(),
        session: new Session(),
        target: new Target({
            id: 'bbbb',
            name: 'M57'
        }),
        result: new Result({
            description: 'mit IC 5146 am Ende'
        }),
        begin: new Date(2006, 10, 1)
    })
];