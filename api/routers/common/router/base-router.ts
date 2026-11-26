import type { Router } from 'express';

export abstract class BaseRouter {
  constructor(public readonly router: Router) {}

  public abstract registerRoutes(): void;
}
