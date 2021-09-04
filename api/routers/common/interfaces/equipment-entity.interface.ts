import { Entity } from './entity.interface';

export interface EquipmentEntity extends Entity {
    model: string;
    vendor: string;
}
