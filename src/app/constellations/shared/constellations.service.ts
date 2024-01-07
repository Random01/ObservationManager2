import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { StorageService } from '../../shared/services/storage.service';
import { Constellation } from '../../shared/models/constellation.model';
import { JwtService } from '../../auth/shared/jwt.service';

@Injectable({ providedIn: 'root' })
export class ConstellationsService extends StorageService<Constellation> {

  constructor(
    http: HttpClient,
    jwtService: JwtService,
  ) {
    super('/constellations', http, jwtService);
  }

  public createNew(params?: Partial<Constellation>): Constellation {
    return new Constellation(params);
  }

}
