import { Injectable } from '@angular/core';

import { StorageService } from '../../shared/services/storage.service';
import { Constellation } from '../../shared/models/constellation.model';

@Injectable({ providedIn: 'root' })
export class ConstellationsService extends StorageService<Constellation> {
  constructor() {
    super('/constellations', Constellation);
  }
}
