import { Response } from 'express';
import * as core from 'express-serve-static-core';

export abstract class BaseRouter {
  constructor(public readonly router: core.Router) {
    if (!router) {
      throw new Error('router should be provided.');
    }

    this.setUp();
  }

  protected handleError(res: Response, error: Error): void {
    console.error(error.message + '; ' + error.stack);

    res.status(500).send({
      success: false,
      errors: [
        {
          message: error.message,
          stack: error.stack,
        },
      ],
    });
  }

  protected abstract setUp(): void;
}
