import { Entity } from '../common';

export interface Filter extends Entity {
    model: string;
    vendor: string;
    filterType: string;
}
