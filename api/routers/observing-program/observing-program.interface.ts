import { Entity } from '../common';
import { Target } from '../target';

export interface ObservingProgram extends Entity {
  readonly name: string;
  readonly description: string;
  readonly targets: Target[];
}
