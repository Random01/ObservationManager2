import { Response } from 'express';

export interface Exporter<T> {
  export(res: Response, items: T[]): void;
}
