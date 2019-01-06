import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { StorageService } from '../../shared/services/storage.service';
import { ObservingProgram } from '../../shared/models/observing-program.model';
import { JwtService } from '../../auth/shared/jwt.service';

@Injectable()
export class ObservingProgramsService extends StorageService<ObservingProgram> {

    constructor(
        protected http: HttpClient,
        protected jwtService: JwtService) {
        super('/observing-programs', http, jwtService);
    }

    public createNew(params?: any): ObservingProgram {
        return new ObservingProgram(params);
    }

}
