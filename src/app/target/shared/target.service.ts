import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Target } from '../../shared/models/target.model';
import { StorageService } from '../../shared/services/storage.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';
import { JwtService } from '../../auth/shared/jwt.service';
import { TargetType } from '../../shared/models/target-type.model';
import { GalaxyTarget } from '../../shared/models/target-types/deep-sky/galaxy-target.model';
import { GlobularClusterTarget } from '../../shared/models/target-types/deep-sky/globular-cluster-target.model';
import { CometTarget } from '../../shared/models/target-types/solar-system/comet-target.model';

interface SearchParams {
    name: string;
    maxCount: number;
}

@Injectable()
export class TargetService extends StorageService<Target> {

    constructor(
        protected http: HttpClient,
        protected jwtService: JwtService) {
        super('/targets', http, jwtService);
    }

    createNew(params?: any): Target {
        return new Target(params);
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

    protected create(targetType: TargetType, params?: any): Target {
        switch (targetType) {
            case TargetType.Galaxy:
                return new GalaxyTarget(params);
            case TargetType.GlobularCluster:
                return new GlobularClusterTarget(params);
            case TargetType.Comet:
                return new CometTarget(params);
            default:
                return new Target(params);
        }
    }

}
