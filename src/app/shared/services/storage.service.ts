import { HttpClient, HttpHeaders } from '@angular/common/http';

export class StorageService<T> {

    private endpoint = 'http://localhost:3001';

    constructor(protected http: HttpClient,
                public url: string) {
    }

    getUrl(): string {
        return this.endpoint + this.url;
    }

    getRecent(): Promise<T[]> {
        throw new Error('Not implemented.');
    }

    add(newItem: T): Promise<T> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        return new Promise<T>((success, fail) => {
            return this.http.post<T>(this.getUrl(), newItem, httpOptions).subscribe(x => {
                success(x);
            });
        });
    }

    getById(id: String): Promise<T> {
        throw new Error('Not implemented.');
    }

    getAll(): Promise<T[]> {
        return new Promise<T[]>((success, fail) => {
            this.http.get<T[]>(this.getUrl()).subscribe(x => {
                success(x);
            });
        });
    }

    update(entity: T): Promise<T> {
        throw new Error('Not implemented.');
    }
}
