import { Injectable } from '@angular/core';

import { Session } from '../../shared/models/models';
import { StorageService } from '../../shared/services/storage.service';

@Injectable({ providedIn: 'root' })
export class SessionService extends StorageService<Session> {
  constructor() {
    super('/sessions', Session);
  }
}
