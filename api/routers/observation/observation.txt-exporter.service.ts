import { Response } from 'express';

import { BaseTxtExporter } from '../common';

export class ObservationTxtExporter extends BaseTxtExporter {

    public export(res: Response, items: any[]) {
        res.set('Content-Type', 'text/plain');
        res.send(Buffer.from(JSON.stringify(items)));
    }

}
