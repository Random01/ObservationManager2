import { Response } from 'express';

import { BaseCsvExporter } from '../common';
import { Lens } from './lens.interface';

export class LensCsvExporter extends BaseCsvExporter<Lens> {

  public export(res: Response, items: Lens[]) {
    res.set('Content-Type', 'text/plain');
    let content = 'Model;Vendor;Factor\r\n';
    items.forEach(({ model, vendor, factor }) => {
      content += `${model};${vendor};${factor}\r\n`;
    });
    res.send(Buffer.from(content));
  }

}
