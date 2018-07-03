import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Eyepiece } from './../../shared/models/equipment/eyepiece.model';
import { StorageService } from '../../shared/services/storage.service';

@Injectable()
export class EyepieceService extends StorageService<Eyepiece> {

    constructor(protected http: HttpClient) {
        super(http, '/eyepieces');
    }

    deserialize(state: any): Eyepiece {
        return new Eyepiece(state);
    }

    createNew(): Eyepiece {
        return new Eyepiece();
    }
}
