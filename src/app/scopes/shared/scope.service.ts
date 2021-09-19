import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Scope } from '../../shared/models/equipment/scope.model';
import { StorageService } from '../../shared/services/storage.service';
import { JwtService } from '../../auth/shared/jwt.service';

@Injectable({ providedIn: 'root' })
export class ScopeService extends StorageService<Scope> {

  constructor(
    http: HttpClient,
    jwtService: JwtService,
  ) {
    super('/scopes', http, jwtService);
  }

  public createNew(params?: Partial<Scope>): Scope {
    return new Scope(params);
  }

}
