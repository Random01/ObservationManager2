import { Response } from 'express';

import { Exporter } from './exporter.interface';

export abstract class BaseTxtExporter<T = any> implements Exporter<T> {
  public abstract export(res: Response, items: T[]): void;
}
