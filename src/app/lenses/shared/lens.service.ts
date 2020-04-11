import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Lens } from '../../shared/models/equipment/equipment';

import { StorageService } from '../../shared/services/storage.service';
import { JwtService } from '../../auth/shared/jwt.service';

@Injectable({ providedIn: 'root' })
export class LensService extends StorageService<Lens> {

    constructor(
        protected http: HttpClient,
        protected jwtService: JwtService,
    ) {
        super('/lenses', http, jwtService);
    }

    createNew(params?: any): Lens {
        return new Lens(params);
    }

}
