import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';

import { auth } from '../../authentication/auth';
import { ExporterFactory, ExportType } from '../export';
import { Entity } from '../interfaces';
import { GetItemsRequestParameters, BaseMongooseStore } from '../store';
import { BaseRouter } from './base-router';

export abstract class BaseEntityRouter<TEntity extends Entity, TStore extends BaseMongooseStore<any, TEntity>>
  extends BaseRouter {

  constructor(
    router: core.Router,
    public readonly store: TStore,
    public readonly exporter?: ExporterFactory<TEntity>,
  ) {
    if (!store) {
      throw new Error('store should be provided.');
    }

    super(router);
  }

  public exportItemsHandler(req: Request, res: Response): void {
    const exportType = String(req.query.exportType || ExportType.TXT) as ExportType;

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
      sortDirection: this.toString(req.query.sortDirection),
      sortField: this.toString(req.query.sortField),
      userCreated: this.toString(req.query.userCreated),
      size: this.toNumber(req.query.size),
      page: this.toNumber(req.query.page),
    };
  }

  public parse(req: Request) {
    return req.body;
  }

  protected override setUp(): void {
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

  protected override toString(queryParam: undefined | string | string[] | qs.ParsedQs | qs.ParsedQs[]): string | undefined {
    return typeof queryParam === 'string' ? queryParam : undefined;
  }

  protected toNumber(queryParam: undefined | string | string[] | qs.ParsedQs | qs.ParsedQs[]): number | undefined {
    return typeof queryParam === 'string' ? parseInt(queryParam, 10) : undefined;
  }

}
