import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject } from '@angular/core';

import { Observable, catchError, firstValueFrom, map, of } from 'rxjs';

import { Entity } from '../models/entity.model';
import { AddResultPayload } from './add-result-payload.model';
import { environment } from '../../../environments/environment';
import { JwtService } from '../../auth/shared/jwt.service';
import { RequestParams } from './request-params.model';
import { PaginatedResponsePayload } from '../interfaces/paginated-response-payload.interface';
import { ResponseStatus } from './response-status.model';
import { ExportRequestParams } from './export-request-params.model';

type EntityConstructor<T> = new (s?: Partial<T>) => T;

export abstract class StorageService<T extends Entity> {
  protected readonly http = inject(HttpClient);
  protected readonly jwtService = inject(JwtService);
  constructor(
    public readonly url: string,
    public readonly createNew: EntityConstructor<T>,
  ) {}

  public getRecent(): Promise<T[]> {
    return this.getAll();
  }

  public add(newItem: T | null): Observable<AddResultPayload> {
    if (!newItem) {
      throw new Error('newItem should be provided');
    }

    const httpOptions = {
      headers: this.getRequestHeaders('application/json'),
    };

    return this.http.post<T>(this.getUrl(), newItem.serialize(), httpOptions).pipe(
      map(
        (result) =>
          new AddResultPayload({
            status: ResponseStatus.Ok,
            payload: this.deserialize(result),
          }),
      ),
    );
  }

  public getById(id: string): Observable<T> {
    const httpOptions = {
      headers: this.getRequestHeaders(),
    };

    return this.http.get<any>(this.getUrl() + '/' + id, httpOptions).pipe(map((result) => this.deserialize(result)));
  }

  public async getAll(): Promise<T[]> {
    return (await this.getItems(new RequestParams())).items;
  }

  /**
   * Returns a paginated list of items.
   * @param request
   */
  public async getItems(request: RequestParams): Promise<PaginatedResponsePayload<T>> {
    const httpOptions = {
      headers: this.getRequestHeaders(),
    };

    const url = this.getUrl() + '?' + request.getQueryString();
    const result = await firstValueFrom(this.http.get<any>(url, httpOptions));

    return {
      ...result,
      items: result.items.map((item: any) => this.deserialize(item)),
    };
  }

  public exportItems(request: ExportRequestParams): Promise<Blob> {
    const httpOptions = {
      headers: this.getRequestHeaders('application/octet-stream'),
      responseType: 'blob',
    } as any;

    const url = this.getUrl() + '/export?' + request.getQueryString();
    // todo: fix as unknown as Promise<Blob>
    return firstValueFrom(this.http.get<Blob>(url, httpOptions)) as unknown as Promise<Blob>;
  }

  public update(entity: T): Observable<boolean> {
    const httpOptions = {
      headers: this.getRequestHeaders('application/json'),
    };

    return this.http.put<T>(this.getUrl() + '/' + entity.id, entity.serialize(), httpOptions).pipe(
      map(() => true),
      catchError(() => of(false)),
    );
  }

  public delete(id: string): Observable<boolean> {
    const url = `${this.getUrl()}/${id}`;
    const httpOptions = {
      headers: this.getRequestHeaders('application/json'),
    };

    return this.http.delete<boolean>(url, httpOptions);
  }

  public deserialize(state: any): T {
    const item = new this.createNew();
    item.deserialize(state);
    return item;
  }

  protected getRequestHeaders(contentType?: string): HttpHeaders {
    const headers = contentType ? new HttpHeaders({ 'Content-Type': contentType }) : new HttpHeaders();
    const token = this.jwtService.getToken();
    return token ? headers.set('Authorization', token) : headers;
  }

  protected getUrl(): string {
    return environment.omServiceEndpoint + this.url;
  }
}
