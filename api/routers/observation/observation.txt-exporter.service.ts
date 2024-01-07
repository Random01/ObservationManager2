import { Response } from 'express';

import { Observation } from './observation.interface';

import { BaseTxtExporter } from '../common';

export class ObservationTxtExporter extends BaseTxtExporter<Observation> {

  public export(res: Response, items: Observation[]): void {
    res.set('Content-Type', 'text/plain');
    const content = this.getContent(items);
    res.send(Buffer.from(content));
  }

  private get(observation: Observation) {
    let row = observation.target.name + '. ';

    if (observation.eyepiece && observation.scope) {
      const zoom = Math.fround(observation.scope.focalLength / observation.eyepiece.focalLength);
      row += `${observation.eyepiece.model} (${Math.round(zoom)}x). `;
    }

    return row + (observation.result.description || '');
  }

  private getContent(items: Observation[]): string {
    return items.map(item => this.get(item)).join('\r\n\r\n');
  }

}
