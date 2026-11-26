import type { Request, Response, Router } from 'express';

import { auth, getUserId } from '../../authentication/auth';
import { ExporterFactory, ExportType } from '../export';
import { Entity } from '../interfaces';
import { GetItemsRequestParameters, BaseMongooseStore } from '../store';
import { BaseRouter } from './base-router';
import { HttpError } from './http-error';

export abstract class BaseEntityRouter<TEntity extends Entity, TStore extends BaseMongooseStore<any, TEntity>> extends BaseRouter {
  constructor(
    router: Router,
    public readonly store: TStore,
    public readonly exporter?: ExporterFactory<TEntity>,
  ) {
    super(router);
  }

  public async exportItemsHandler(req: Request, res: Response): Promise<void> {
    if (!this.exporter) {
      throw new HttpError(404, 'Export is unavailable for this resource.');
    }

    const exportType = req.query.exportType || ExportType.TXT;
    const exporter = typeof exportType === 'string' ? this.exporter.getExporter(exportType) : undefined;
    if (!exporter) {
      throw new HttpError(400, 'Unsupported export format.');
    }
    const { items } = await this.store.getItems({
      requestParameters: this.parseRequestParams(req),
      userId: getUserId(req),
    });
    exporter.export(res, items);
  }

  public async addNewHandler(req: Request, res: Response): Promise<void> {
    const entity = await this.store.add({
      entity: this.parseBody(req),
      userId: getUserId(req),
    });
    res.json(entity);
  }

  public async getByIdHandler(req: Request, res: Response): Promise<void> {
    const entity = await this.store.getById({
      id: req.params.id,
      userId: getUserId(req),
    });
    res.json(entity);
  }

  public async updateHandler(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const body = this.parseBody(req);
    if (body.id != null && String(body.id) !== id) {
      throw new HttpError(400, 'Request body ID must match the URL.');
    }
    const entity = await this.store.update({ id, entity: body, userId: getUserId(req) });
    if (!entity) {
      throw new HttpError(404, 'Record not found.');
    }
    res.json(entity);
  }

  public async deleteHandler(req: Request, res: Response): Promise<void> {
    const { deletedCount } = await this.store.delete({
      id: req.params.id,
      userId: getUserId(req),
    });
    if (!deletedCount) {
      throw new HttpError(404, 'Record not found.');
    }
    res.json({ success: true });
  }

  public async getItemsHandler(req: Request, res: Response): Promise<void> {
    const items = await this.store.getItems({
      requestParameters: this.parseRequestParams(req),
      userId: getUserId(req),
    });
    res.json(items);
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

  public override registerRoutes(): void {
    this.router.get('/export', auth.optional, this.exportItemsHandler.bind(this));
    this.router.get('/', auth.optional, this.getItemsHandler.bind(this));
    this.router.get('/:id', auth.optional, this.getByIdHandler.bind(this));
    this.router.put('/:id', auth.required, this.updateHandler.bind(this));
    this.router.delete('/:id', auth.required, this.deleteHandler.bind(this));
    this.router.post('/', auth.required, this.addNewHandler.bind(this));
  }

  private parseBody(req: Request): Partial<TEntity> {
    const body: unknown = req.body;
    if (body == null || typeof body !== 'object' || Array.isArray(body)) {
      throw new HttpError(400, 'Request body must be an object.');
    }
    return body as Partial<TEntity>;
  }

  protected override toString(queryParam: Request['query'][string]): string | undefined {
    return typeof queryParam === 'string' ? queryParam : undefined;
  }

  protected toNumber(queryParam: Request['query'][string]): number | undefined {
    return typeof queryParam === 'string' ? parseInt(queryParam, 10) : undefined;
  }
}
