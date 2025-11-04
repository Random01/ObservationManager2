import { Injectable } from '@angular/core';

import { StorageService } from '../../shared/services/storage.service';
import { Observation } from '../../shared/models/models';
import { ObservationSearchParams } from './observation-search-params.model';

@Injectable({ providedIn: 'root' })
export class ObservationService extends StorageService<Observation> {
  constructor() {
    super('/observations', Observation);
  }

  public getSessionObservations(session: string) {
    return this.getItems(new ObservationSearchParams({ session, page: 0, size: 10 }));
  }
}
