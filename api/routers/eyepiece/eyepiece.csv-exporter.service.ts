import { Response } from 'express';

import { BaseCsvExporter } from '../common';

import { Eyepiece } from './eyepiece.interface';

export class EyepieceCsvExporter extends BaseCsvExporter<Eyepiece> {

  public export(res: Response, items: Eyepiece[]) {
    res.set('Content-Type', 'text/plain');
    const content = this.getContent(items);
    res.send(Buffer.from(content));
  }

  private getContent(items: Eyepiece[]): string {
    let content = 'Model;Vendor;Focal Length (mm);Apparent FOV (deg)\r\n';
    items.forEach(({ model, vendor, focalLength, apparentFOV }) => {
      content += `${model};${vendor || ''};${focalLength || ''};${apparentFOV || ''}\r\n`;
    });
    return content;
  }

}
