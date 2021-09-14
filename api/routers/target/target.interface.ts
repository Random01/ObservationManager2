import { Entity } from '../common';

import { TargetType } from './target-type.enum';

export interface Target extends Entity {
    name: string;
    originalName: string;
    type: TargetType;
    ra: number;
    dec: number;
    constellation: string;
    aliases: string[];
    visMag: number;
    surfBr: number;
}
