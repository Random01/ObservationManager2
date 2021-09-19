import { Response } from 'express';

import { BaseCsvExporter } from '../common';

import { Scope } from './scope.interface';

export class ScopeCsvExporter extends BaseCsvExporter<Scope> {

  public export(res: Response, items: Scope[]): void {
    res.set('Content-Type', 'text/plain');
    let content = 'Model;Aperture;Focal Length;Vendor\r\n';
    items.forEach(({ model, aperture, focalLength, vendor }) => {
      content += `${model};${aperture || ''};${focalLength || ''};${vendor || ''}\r\n`;
    });
    res.send(Buffer.from(content));
  }

}
