import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Target } from './../../shared/models/target.model';
import { StorageService } from '../../shared/services/storage.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

interface SearchParams {
    name: string;
    maxCount: number;
}

@Injectable()
export class TargetService extends StorageService<Target> {

    constructor(protected http: HttpClient) {
        super(http, '/targets');
    }

    deserialize(state: any): Target {
        state.id = state._id;
        delete state._id;
        return new Target(state);
    }

    createNew(): Target {
        return new Target();
    }

    search(searchParams: SearchParams): Observable<Target[]> {
        if (searchParams.name.trim() === '') {
            return of([]);
        }

        const url = `${this.getUrl()}?name=${searchParams.name}&maxCount=${searchParams.maxCount}`;

        return this.http.get<Target[]>(url)
            .pipe(
                map((targets) => targets.map(item => this.deserialize(item)))
            );
    }
}
