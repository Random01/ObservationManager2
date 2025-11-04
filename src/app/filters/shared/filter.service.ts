import { Injectable } from '@angular/core';

import { Filter } from '../../shared/models/equipment/filter.model';
import { StorageService } from '../../shared/services/storage.service';

@Injectable({ providedIn: 'root' })
export class FilterService extends StorageService<Filter> {
  constructor() {
    super('/filters', Filter);
  }
}
