import { Filter } from './../../shared/models/equipment/filter.model';

export const FILTERS: Filter[] = [
    new Filter({ id: 'gggg', model: 'O-III 2"', vendor: 'Thousand Oaks', filterType: 'O-III' }),
    new Filter({ id: 'hhhh', model: 'UHC', vendor: 'Lumicon', filterType: 'narrow band' })
];
