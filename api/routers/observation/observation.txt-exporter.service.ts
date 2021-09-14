import { Response } from 'express';

import { Observation } from './observation.interface';

import { BaseTxtExporter } from '../common';

export class ObservationTxtExporter extends BaseTxtExporter<any> {

    public export(res: Response, items: Observation[]) {
        res.set('Content-Type', 'text/plain');
        const txt = items.map(item => this.get(item)).join('\r\n\r\n');
        res.send(Buffer.from(txt));
    }

    private get(observation: Observation) {
        let row = observation.target.name + '. ';

        if (observation.eyepiece && observation.scope) {
            const zoom = observation.scope.focalLength / observation.eyepiece.focalLength;
            row +=  `${observation.eyepiece.model} (${zoom}x). `;
        }

        return row + observation.result.description;
    }

}
