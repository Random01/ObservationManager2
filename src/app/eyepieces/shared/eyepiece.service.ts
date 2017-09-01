import { Injectable } from '@angular/core';

import { Eyepiece } from './../../shared/models/equipment/eyepiece.model';
import { EYEPIECES } from './mock-eyepieces';

@Injectable()
export class EyepieceService {

    getEyepieces(): Promise<Eyepiece[]> {
        return Promise.resolve(EYEPIECES);
    }

    addEyepiece(eyepiece: Eyepiece): Promise<string> {
        return Promise.resolve('1');
    }
}