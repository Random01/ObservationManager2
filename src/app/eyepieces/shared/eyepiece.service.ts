import { Injectable } from '@angular/core';

import { Eyepiece } from '../../shared/models/equipment/eyepiece.model';
import { StorageService } from '../../shared/services/storage.service';

@Injectable({ providedIn: 'root' })
export class EyepieceService extends StorageService<Eyepiece> {
  constructor() {
    super('/eyepieces', Eyepiece);
  }
}
