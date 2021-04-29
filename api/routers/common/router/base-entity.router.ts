import { Request } from 'express';

export abstract class BaseEntityRouter {

    protected getUserId(req: Request) {
        return (req as any).payload ? (req as any).payload.id : null;
    }

}
