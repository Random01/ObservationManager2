import { Entity } from '../common';

export interface Site extends Entity {
  name: string;
  timezone: number;
  longitude: number;
  latitude: number;
  elevation: number;
  code: string;
}
