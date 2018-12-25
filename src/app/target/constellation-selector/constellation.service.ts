import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Constellation } from '../../shared/models/constellation.mode';
import { StorageService } from '../../shared/services/storage.service';
import { JwtService } from '../../auth/shared/jwt.service';

@Injectable()
export class ConstellationService extends StorageService<Constellation> {

    createNew(params?: any): Constellation {
        return new Constellation(params);
    }

    constructor(
        protected http: HttpClient,
        protected jwtService: JwtService) {
        super('/constellations', http, jwtService);
    }

}
