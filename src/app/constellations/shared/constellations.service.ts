import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { StorageService } from '../../shared/services/storage.service';
import { Constellation } from '../../shared/models/constellation.mode';
import { JwtService } from '../../auth/shared/jwt.service';

@Injectable({ providedIn: 'root' })
export class ConstellationsService extends StorageService<Constellation> {

    constructor(
        protected http: HttpClient,
        protected jwtService: JwtService) {
        super('/constellations', http, jwtService);
    }

    createNew(params?: any): Constellation {
        return new Constellation(params);
    }

}
