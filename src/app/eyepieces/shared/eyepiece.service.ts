﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Eyepiece } from '../../shared/models/equipment/eyepiece.model';
import { StorageService } from '../../shared/services/storage.service';
import { JwtService } from '../../auth/shared/jwt.service';

@Injectable({ providedIn: 'root' })
export class EyepieceService extends StorageService<Eyepiece> {

  constructor(
    http: HttpClient,
    jwtService: JwtService,
  ) {
    super('/eyepieces', http, jwtService);
  }

  public createNew(params?: Partial<Eyepiece>): Eyepiece {
    return new Eyepiece(params);
  }
}
