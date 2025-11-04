import { Injectable } from '@angular/core';

import { Constellation } from '../../shared/models/constellation.model';
import { StorageService } from '../../shared/services/storage.service';

@Injectable({ providedIn: 'root' })
export class ConstellationService extends StorageService<Constellation> {
  constructor() {
    super('/constellations', Constellation);
  }
}
