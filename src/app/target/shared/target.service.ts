import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Target } from './../../shared/models/target.model';
import { StorageService } from '../../shared/services/storage.service';


@Injectable()
export class TargetService extends StorageService<Target> {

    constructor(protected http: HttpClient) {
        super(http, '/targets');
    }

    deserialize(state: any): Target {
        return new Target(state);
    }

}
