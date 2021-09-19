import { Request } from 'express';

export abstract class BaseEntityRouter {

  protected getUserId(req: Request): string | null {
    return (req as any)?.payload?.id;
  }

}
