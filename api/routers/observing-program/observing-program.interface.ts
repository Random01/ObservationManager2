import { Entity } from '../common';
import { Target } from '../target';

export interface ObservingProgram extends Entity {
    name: string;
    description: string;
    targets: Target[];
}
