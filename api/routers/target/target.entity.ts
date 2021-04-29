import { TargetType } from './target-type.enum';

export interface Target {
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
