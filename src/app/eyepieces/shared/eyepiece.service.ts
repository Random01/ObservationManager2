import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Eyepiece } from './../../shared/models/equipment/eyepiece.model';

@Injectable()
export class EyepieceService {

    private epUrl = 'http://localhost:3001/eyepieces';

    constructor(private http: HttpClient) {
    }

    getAll(): Promise<Eyepiece[]> {
        return new Promise<Eyepiece[]>((success, fail) => {
            this.http.get<Eyepiece[]>(this.epUrl).subscribe(x => {
                success(x);
            });
        });
    }

    add(eyepiece: Eyepiece): Promise<string> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        return new Promise<string>((success, fail) => {
            return this.http.post<Eyepiece>(this.epUrl, eyepiece, httpOptions).subscribe(x => {
                success('');
            });
        });
    }
}
