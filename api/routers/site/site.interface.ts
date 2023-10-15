import { Entity } from '../common';

export interface Site extends Entity {
  readonly name: string;
  readonly timezone: number;
  readonly longitude: number;
  readonly latitude: number;
  readonly elevation: number;
  readonly code: string;
}
