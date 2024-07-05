import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Vendor } from '../../shared/models/equipment/vendor.model';
import { PaginatedItems } from '../../../../api/routers/common';

@Injectable({ providedIn: 'root' })
export class VendorService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  public getAllSuggestions(): Observable<PaginatedItems<Vendor>> {
    return this.getItems();
  }

  private getUrl(): string {
    return environment.omServiceEndpoint + '/vendors';
  }

  private getItems(): Observable<PaginatedItems<Vendor>> {
    return this.http.get<PaginatedItems<Vendor>>(this.getUrl());
  }

}
