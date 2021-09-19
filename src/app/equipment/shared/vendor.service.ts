import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Vendor } from '../../shared/models/equipment/vendor.model';

@Injectable({ providedIn: 'root' })
export class VendorService {

    constructor(
        private readonly http: HttpClient,
    ) { }

    public getAllSuggestions(): Observable<Vendor[]> {
        return this.getItems();
    }

    private getUrl(): string {
        return environment.omServiceEndpoint + '/vendors';
    }

    private getItems(): Observable<Vendor[]> {
        return this.http.get<Vendor[]>(this.getUrl());
    }

}
