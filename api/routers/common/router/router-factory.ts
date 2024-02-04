import { Router, Request, Response } from 'express';
import * as core from 'express-serve-static-core';

import { auth } from '../../authentication/auth';
import { ExporterFactory, ExportType } from '../export';
import { Entity } from '../interfaces';
import { GetItemsRequestParameters, BaseMongooseStore } from '../store';

export class RouterFactory<TEntity extends Entity, TStore extends BaseMongooseStore<any, TEntity>> {

  constructor(
    public readonly store: TStore,
    public readonly router: core.Router,
    public readonly exporter?: ExporterFactory<TEntity>,
  ) {
    if (!store) {
      throw new Error('store should be provided.');
    }
    if (!router) {
      throw new Error('router should be provided.');
    }

    this.setUp();
  }

  public handleError(res: Response, error: Error): void {
    console.error(error.message + '; ' + error.stack);

    res.status(500).send({
      success: false,
      errors: [{
        message: error.message,
        stack: error.stack,
      }],
    });
  }

  public exportItemsHandler(req: Request, res: Response): void {
    const exportType = (String(req.query.exportType) || ExportType.TXT) as ExportType;

    this.store.getItems({
      requestParameters: this.parseRequestParams(req),
      userId: this.getUserId(req),
    }).then(
      result => this.export(res, result.items, exportType),
      (error: Error) => this.handleError(res, error),
    );
  }

  public addNewHandler(req: Request, res: Response): void {
    this.store.add({
      entity: this.parse(req),
      userId: this.getUserId(req),
    }).then(
      entity => res.json(entity),
      (error: Error) => this.handleError(res, error),
    );
  }

  public getByIdHandler(req: Request, res: Response): void {
    this.store.getById({
      id: req.params.id,
      userId: this.getUserId(req),
    }).then(
      entity => res.json(entity),
      (error: Error) => this.handleError(res, error),
    );
  }

  public updateHandler(req: Request, res: Response): void {
    this.store.update({
      entity: this.parse(req),
      userId: this.getUserId(req),
    }).then(
      entity => res.json(entity),
      (error: Error) => this.handleError(res, error),
    );
  }

  public deleteHandler(req: Request, res: Response): void {
    this.store.delete({
      id: req.params.id,
      userId: this.getUserId(req),
    }).then(
      () => res.json({ success: true }),
      (error: Error) => this.handleError(res, error),
    );
  }

  public getItemsHandler(req: Request, res: Response): void {
    this.store.getItems({
      requestParameters: this.parseRequestParams(req),
      userId: this.getUserId(req),
    }).then(
      items => res.json(items),
      (error: Error) => this.handleError(res, error),
    );
  }

  public parseRequestParams(req: Request): GetItemsRequestParameters {
    return {
      ...req.query,
      size: typeof req.query.size === 'string' ? parseInt(req.query.size, 10) : undefined,
      page: typeof req.query.page === 'string' ? parseInt(req.query.page, 10) : undefined,
    };
  }

  public parse(req: Request) {
    return req.body;
  }

  public createSearchParams(requestParams: any) {
    return requestParams;
  }

  public static create(
    app: core.Express,
    store: any,
    path: string,
    exporter?: ExporterFactory,
  ) {
    const router = Router({ strict: true });
    const routerFactory = new RouterFactory(store, router, exporter);

    app.use('/api' + path, router);

    return routerFactory;
  }

  protected setUp(): void {
    this.router.get('/export', auth.optional, this.exportItemsHandler.bind(this));
    this.router.get('/', auth.optional, this.getItemsHandler.bind(this));
    this.router.get('/:id', auth.optional, this.getByIdHandler.bind(this));
    this.router.put('/:id', auth.required, this.updateHandler.bind(this));
    this.router.delete('/:id', auth.required, this.deleteHandler.bind(this));
    this.router.post('/', auth.required, this.addNewHandler.bind(this));
  }

  protected getUserId(req: Request): string | undefined {
    return (req as any)?.payload?.id;
  }

  protected export(res: Response, items: TEntity[], exportType: ExportType): void {
    try {
      if (!this.exporter) {
        throw new Error('Exporter is not implemented.');
      }

      this.exporter.getExporter(exportType).export(res, items);
    } catch (err) {
      this.handleError(res, err);
    }
  }

}
