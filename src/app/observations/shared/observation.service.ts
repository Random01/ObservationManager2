import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { StorageService } from '../../shared/services/storage.service';
import { Observation } from '../../shared/models/models';
import { JwtService } from '../../auth/shared/jwt.service';
import { ObservationSearchParams } from './observation-search-params.model';

@Injectable({ providedIn: 'root' })
export class ObservationService extends StorageService<Observation> {

  constructor(
    http: HttpClient,
    jwtService: JwtService,
  ) {
    super('/observations', http, jwtService, Observation);
  }

  public getSessionObservations(session: string) {
    return this.getItems(new ObservationSearchParams({ session, page: 0, size: 10 }));
  }

}
