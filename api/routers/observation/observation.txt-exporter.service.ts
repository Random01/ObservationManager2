import { Response } from 'express';

import { Observation } from './observation.interface';

import { BaseTxtExporter } from '../common';

export class ObservationTxtExporter extends BaseTxtExporter<Observation> {
  public export(res: Response, items: Observation[]): void {
    res.set('Content-Type', 'text/plain');
    const content = this.getContent(items);
    res.send(Buffer.from(content));
  }

  private get(observation: Observation): string {
    let row = observation.target?.name + '. ';

    const { eyepiece, scope } = observation;
    if (eyepiece && scope) {
      const magnification = scope.focalLength != null && eyepiece.focalLength
        ? ` (${Math.round(Math.fround(scope.focalLength / eyepiece.focalLength))}x)`
        : '';
      row += `${eyepiece.model}${magnification}. `;
    }

    return row + (observation.result.description || '');
  }

  private getContent(items: Observation[]): string {
    return items.map((item) => this.get(item)).join('\r\n\r\n');
  }
}
