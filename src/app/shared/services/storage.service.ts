import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, catchError, firstValueFrom, map, of } from 'rxjs';

import { Entity } from '../models/entity.model';
import { AddResultPayload } from './add-result-payload.model';
import { environment } from '../../../environments/environment';
import { JwtService } from '../../auth/shared/jwt.service';
import { RequestParams } from './request-params.model';
import { PaginatedResponsePayload } from '../interfaces/paginated-response-payload.interface';
import { ResponseStatus } from './response-status.model';
import { ExportRequestParams } from './export-request-params.model';

type EntityConstructor<T> = new (s?: Partial<T>) => T;;

export abstract class StorageService<T extends Entity> {

  constructor(
    public readonly url: string,
    protected readonly http: HttpClient,
    protected readonly jwtService: JwtService,
    public readonly createNew: EntityConstructor<T>,
  ) { }

  public getRecent(): Promise<T[]> {
    return this.getAll();
  }

  public add(newItem: T): Observable<AddResultPayload> {
    if (!newItem) {
      throw new Error('newItem should be provided');
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.getAuthorizationToken(),
      }),
    };

    return this.http.post<T>(this.getUrl(), newItem.serialize(), httpOptions)
      .pipe(
        map(result => new AddResultPayload({
          status: ResponseStatus.Ok,
          payload: this.deserialize(result),
        })),
      );
  }

  public getById(id: String): Observable<T> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.getAuthorizationToken(),
      }),
    };

    return this.http.get<any>(this.getUrl() + '/' + id, httpOptions)
      .pipe(
        map(result => this.deserialize(result))
      );
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
      headers: new HttpHeaders({
        'Authorization': this.getAuthorizationToken(),
      })
    };

    const url = this.getUrl() + '?' + request.getQueryString();
    const result = await this.http.get<any>(url, httpOptions).toPromise();

    return {
      ...result,
      items: result.items.map((item: any) => this.deserialize(item)),
    };
  }

  public exportItems(request: ExportRequestParams): Promise<Blob> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.getAuthorizationToken(),
        'Content-Type': 'application/octet-stream',
      }),
      responseType: 'blob',
    } as any;

    const url = this.getUrl() + '/export?' + request.getQueryString();
    // todo: fix as unknown as Promise<Blob>
    return firstValueFrom(this.http.get<Blob>(url, httpOptions)) as unknown as Promise<Blob>;
  }

  public update(entity: T): Observable<Boolean> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.getAuthorizationToken(),
      }),
    };

    return this.http.put<T>(this.getUrl() + '/' + entity.id, entity.serialize(), httpOptions)
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  public delete(id: String): Observable<Boolean> {
    const url = `${this.getUrl()}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.getAuthorizationToken(),
      })
    };

    return this.http.delete<Boolean>(url, httpOptions);
  }

  public deserialize(state: any): T {
    const item = new this.createNew();
    item.deserialize(state);
    return item;
  }

  protected getAuthorizationToken(): string {
    return this.jwtService.getToken();
  }

  protected getUrl(): string {
    return environment.omServiceEndpoint + this.url;
  }

}
