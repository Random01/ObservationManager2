import { Response } from 'express';

import { BaseCsvExporter } from '../common';

import { Site } from './site.interface';

export class SiteCvsExporter extends BaseCsvExporter<Site> {

  public export(res: Response, items: Site[]): void {
    res.set('Content-Type', 'text/plain');
    let content = 'Name;Timezone;Geographical Latitude;Geographical Longitude;Elevation (m)\r\n';
    items.forEach(({ name, timezone, latitude, longitude, elevation }) => {
      content += `${name};${timezone || ''};${latitude || ''};${longitude || ''};${elevation || ''}\r\n`;
    });
    res.send(Buffer.from(content));
  }

}
