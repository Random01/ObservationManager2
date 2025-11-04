import { Injectable } from '@angular/core';

import { Scope } from '../../shared/models/equipment/scope.model';
import { StorageService } from '../../shared/services/storage.service';

@Injectable({ providedIn: 'root' })
export class ScopeService extends StorageService<Scope> {
  constructor() {
    super('/scopes', Scope);
  }
}
