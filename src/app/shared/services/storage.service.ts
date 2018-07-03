import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Entity } from './../models/entity.model';
import { Observable } from 'rxjs/Observable';

export abstract class StorageService<T extends Entity> {

    private endpoint = 'http://localhost:3001';

    constructor(
        protected http: HttpClient,
        public url: string) {
    }

    getUrl(): string {
        return this.endpoint + this.url;
    }

    getRecent(): Promise<T[]> {
        return this.getAll();
    }

    add(newItem: T): Promise<T> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return new Promise<T>((success, fail) => {
            return this.http.post<T>(this.getUrl(), newItem.serialize(), httpOptions)
                .subscribe(x => {
                    success(this.deserialize(x));
                });
        });
    }

    getById(id: String): Promise<T> {
        return new Promise<T>((success, fail) => {
            return this.http.get<any>(this.getUrl() + '/' + id)
                .subscribe(x => {
                    success(this.deserialize(x));
                });
        });
    }

    getAll(): Promise<T[]> {
        return new Promise<T[]>((success, fail) => {
            this.http.get<T[]>(this.getUrl())
                .subscribe(items => {
                    success(items.map(item => this.deserialize(item)));
                });
        });
    }

    update(entity: T): Promise<T> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return new Promise<T>((success, fail) => {
            return this.http.put<T>(this.getUrl() + '/' + entity.id, entity.serialize(), httpOptions)
                .subscribe(item => {
                    success(this.deserialize(item));
                });
        });
    }

    delete(id: String): Observable<Boolean> {
        throw new Error('Not implemented.');
    }

    abstract createNew(): T;

    abstract deserialize(state: any): T;
}
