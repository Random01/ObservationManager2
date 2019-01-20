import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StorageService } from '../../shared/services/storage.service';
import { ObservingProgram } from '../../shared/models/observing-program.model';
import { JwtService } from '../../auth/shared/jwt.service';
import { RequestParams } from '../../shared/services/request-params.model';
import { Target, Observation } from '../../shared/models/models';
import { Response } from '../../shared/interfaces/response.interface';

export class TargetStatistics {

    public target: Target;
    public observations: Observation[];

    constructor(params?: {
        target?: Target,
        observations?: Observation[]
    }) {
        this.target = new Target();
        this.observations = [];

        Object.assign(this, params);
    }

    get observed(): boolean {
        return this.observations.length > 0;
    }

}

export class ObservingProgramStatisticsRequestParams extends RequestParams {

    public observingProgramId: string;

    protected getQueryParams(): { name: string, value: any }[] {
        const params = super.getQueryParams();

        params.push({ name: 'id', value: this.observingProgramId });

        return params;
    }

}

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

    public getStatistics(request: ObservingProgramStatisticsRequestParams): Promise<Response<TargetStatistics>> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': this.getAuthorizationToken()
            })
        };

        return new Promise<Response<TargetStatistics>>((success) => {
            const url = this.getUrl() + `/statistics/${request.observingProgramId}?` + request.getQueryString();

            this.http.get<any>(url, httpOptions)
                .subscribe(response => {
                    success({
                        ...response,
                        items: response.items.map((item: any) => this.parseTargetStatistics(item))
                    });
                });
        });
    }

    parseTargetStatistics(state: any): TargetStatistics {
        return new TargetStatistics({
            target: state.target,
            observations: state.observations || []
        });
    }
}
