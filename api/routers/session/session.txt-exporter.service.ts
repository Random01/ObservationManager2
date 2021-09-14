import { Response } from 'express';

import { BaseTxtExporter } from '../common';

import { Session } from './session.interface';

export class SessionTxtExporter extends BaseTxtExporter<Session> {

    public export(res: Response, sessions: Session[]) {
        res.set('Content-Type', 'text/plain');
        res.send(Buffer.from(this.exportSession(sessions[0])));
    }

    private exportSession(session: Session) {
        const rows: string[] = [];
        rows.push(`${session.begin} - ${session.end}`);
        return rows.join('/n/r');
    }

}
