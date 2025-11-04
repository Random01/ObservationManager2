import { Injectable } from '@angular/core';

import { Site } from '../../shared/models/site.model';
import { StorageService } from '../../shared/services/storage.service';

@Injectable({ providedIn: 'root' })
export class SiteService extends StorageService<Site> {
  constructor() {
    super('/sites', Site);
  }
}
