import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Eyepiece } from '../../shared/models/equipment/eyepiece.model';
import { StorageService } from '../../shared/services/storage.service';
import { JwtService } from '../../auth/shared/jwt.service';

@Injectable({ providedIn: 'root' })
export class EyepieceService extends StorageService<Eyepiece> {

    constructor(
        protected http: HttpClient,
        protected jwtService: JwtService) {
        super('/eyepieces', http, jwtService);
    }

    createNew(params?: any): Eyepiece {
        return new Eyepiece(params);
    }
}
