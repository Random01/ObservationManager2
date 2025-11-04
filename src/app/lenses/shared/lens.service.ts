import { Injectable } from '@angular/core';

import { Lens } from '../../shared/models/equipment/equipment';
import { StorageService } from '../../shared/services/storage.service';

@Injectable({ providedIn: 'root' })
export class LensService extends StorageService<Lens> {
  constructor() {
    super('/lenses', Lens);
  }
}
