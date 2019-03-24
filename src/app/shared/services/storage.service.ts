import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Entity } from '../models/entity.model';
import { AddResultPayload } from './add-result-payload.model';
import { environment } from '../../../environments/environment';
import { JwtService } from '../../auth/shared/jwt.service';
import { RequestParams } from './request-params.model';
import { PaginatedResponsePayload } from '../interfaces/paginated-response-payload.interface';
import { tap } from 'rxjs/operators';

export abstract class StorageService<T extends Entity> {

    constructor(
        public url: string,
        protected http: HttpClient,
        protected jwtService: JwtService) {
    }

    getUrl(): string {
        return environment.omServiceEndpoint + this.url;
    }

    getRecent(): Promise<T[]> {
        return this.getAll();
    }

    add(newItem: T): Promise<AddResultPayload> {
        if (!newItem) {
            throw new Error('newItem should be provided');
        }

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.getAuthorizationToken()
            })
        };

        return new Promise<AddResultPayload>((success) => {
            return this.http.post<T>(this.getUrl(), newItem.serialize(), httpOptions)
                .subscribe((result) => {
                    success(new AddResultPayload({
                        status: 200,
                        payload: this.deserialize(result)
                    }));
                });
        });
    }

    getById(id: String): Promise<T> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': this.getAuthorizationToken()
            })
        };

        return new Promise<T>((success) => {
            return this.http.get<any>(this.getUrl() + '/' + id, httpOptions)
                .subscribe(x => {
                    success(this.deserialize(x));
                });
        });
    }

    async getAll(): Promise<T[]> {
        const response = await this.getItems(new RequestParams());
        return response.items;
    }

    /**
     * Returns a paginated list of items.
     * @param request
     */
    getItems(request: RequestParams): Promise<PaginatedResponsePayload<T>> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': this.getAuthorizationToken()
            })
        };

        return new Promise<PaginatedResponsePayload<T>>((success) => {
            const url = this.getUrl() + '?' + request.getQueryString();

            this.http.get<any>(url, httpOptions)
                .subscribe(response => {
                    success({
                        ...response,
                        items: response.items.map((item: any) => this.deserialize(item))
                    });
                });
        });
    }

    async exportItems(request: RequestParams): Promise<Blob> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': this.getAuthorizationToken(),
                'Content-Type': 'application/octet-stream'
            }),
            responseType: 'blob'
        } as any;

        const url = this.getUrl() + '/export?' + request.getQueryString();
        return await this.http.get<Blob>(url, httpOptions).toPromise() as any;
    }

    getAuthorizationToken(): string {
        return this.jwtService.getToken();
    }

    update(entity: T): Promise<Boolean> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.getAuthorizationToken()
            })
        };

        return new Promise<Boolean>((success) => {
            return this.http.put<T>(this.getUrl() + '/' + entity.id, entity.serialize(), httpOptions)
                .subscribe(() => {
                    success(true);
                });
        });
    }

    delete(id: String): Promise<Boolean> {
        const url = `${this.getUrl()}/${id}`;
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.getAuthorizationToken()
            })
        };

        return this.http.delete<Boolean>(url, httpOptions).toPromise();
    }

    abstract createNew(params?: any): T;

    deserialize(state: any): T {
        const item = this.createNew();
        item.deserialize(state);
        return item;
    }
}
