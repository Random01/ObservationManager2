import { Response } from 'express';

import { BaseTxtExporter } from '../common';

export class SessionTxtExporter extends BaseTxtExporter {

    public export(res: Response, session: any) {
        res.set('Content-Type', 'text/plain');
        res.send(Buffer.from(JSON.stringify(session)));
    }

}
