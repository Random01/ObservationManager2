import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Target } from '../../shared/models/target.model';
import { StorageService } from '../../shared/services/storage.service';
import { JwtService } from '../../auth/shared/jwt.service';
import { TargetType } from '../../shared/models/target-type.model';
import { GalaxyTarget } from '../../shared/models/target-types/deep-sky/galaxy-target.model';
import { GlobularClusterTarget } from '../../shared/models/target-types/deep-sky/globular-cluster-target.model';
import { CometTarget } from '../../shared/models/target-types/solar-system/comet-target.model';

interface SearchParams {
  name: string;
  maxCount: number;
}

@Injectable({ providedIn: 'root' })
export class TargetService extends StorageService<Target> {

  constructor(
    http: HttpClient,
    jwtService: JwtService,
  ) {
    super('/targets', http, jwtService);
  }

  public createNew(params?: Partial<Target>): Target {
    return new Target(params);
  }

  public search({ name, maxCount }: SearchParams): Observable<Target[]> {
    name = (name || '').trim();
    if (name === '') {
      return of([]);
    }

    const url = `${this.getUrl()}?name=${name}&maxCount=${maxCount}`;
    return this.http.get<Target[]>(url)
      .pipe(
        map(targets => targets.map(item => this.deserialize(item)))
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
