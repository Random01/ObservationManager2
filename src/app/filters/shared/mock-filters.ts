import { Filter, FilterType } from './../../shared/models/equipment/equipment';

export const FILTERS: Filter[] = [
    new Filter({
        id: 'gggg',
        model: 'O-III 2"',
        vendor: 'Thousand Oaks',
        filterType: FilterType.OIII
    }),
    new Filter({
        id: 'hhhh',
        model: 'UHC',
        vendor: 'Lumicon',
        filterType: FilterType.NarrowBand
    })
];
