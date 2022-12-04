import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Filter } from '../../shared/models/equipment/filter.model';
import { StorageService } from '../../shared/services/storage.service';
import { JwtService } from '../../auth/shared/jwt.service';

@Injectable({ providedIn: 'root' })
export class FilterService extends StorageService<Filter> {

  constructor(
    http: HttpClient,
    jwtService: JwtService,
  ) {
    super('/filters', http, jwtService);
  }

  public createNew(params?: Partial<Filter>): Filter {
    return new Filter(params);
  }
}
