import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Entity } from '../models/entity.model';
import { AddResultPayload } from './add-result-payload.model';

export abstract class StorageService<T extends Entity> {

    private endpoint = 'http://localhost:3001';

    constructor(
        protected http: HttpClient,
        public url: string) {
    }

    protected static prepare(state: any): any {
        state.id = state._id;
        delete state._id;

        return state;
    }

    getUrl(): string {
        return this.endpoint + this.url;
    }

    getRecent(): Promise<T[]> {
        return this.getAll();
    }

    add(newItem: T): Promise<AddResultPayload> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
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
        return new Promise<T>((success) => {
            return this.http.get<any>(this.getUrl() + '/' + id)
                .subscribe(x => {
                    success(this.deserialize(x));
                });
        });
    }

    getAll(): Promise<T[]> {
        return new Promise<T[]>((success) => {
            this.http.get<T[]>(this.getUrl())
                .subscribe(items => {
                    success(items.map(item => this.deserialize(item)));
                });
        });
    }

    update(entity: T): Promise<Boolean> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
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
                'Content-Type': 'application/json'
            })
        };

        return this.http.delete<Boolean>(url, httpOptions).toPromise();
    }

    abstract createNew(params?: any): T;

    deserialize(state: any): T {
        return this.createNew(StorageService.prepare(state));
    }
}
