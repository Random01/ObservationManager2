import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Constellation } from '../../shared/models/constellation.mode';
import { StorageService } from '../../shared/services/storage.service';
import { JwtService } from '../../auth/shared/jwt.service';

@Injectable({ providedIn: 'root' })
export class ConstellationService extends StorageService<Constellation> {

    constructor(
        http: HttpClient,
        jwtService: JwtService,
    ) {
        super('/constellations', http, jwtService);
    }

    public createNew(params?: any): Constellation {
        return new Constellation(params);
    }

}
