import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StorageService } from '../../shared/services/storage.service';
import { ObservingProgram } from '../../shared/models/observing-program.model';
import { JwtService } from '../../auth/shared/jwt.service';
import { PaginatedResponsePayload } from '../../shared/interfaces/paginated-response-payload.interface';
import { TargetStatistics } from './target-statistics.model';
import { ObservingProgramStatisticsRequestParams } from './observing-program-satistics-request-params.model';
import ObservingProgramStatistics from './observing-program-statistics.model';

@Injectable({ providedIn: 'root' })
export class ObservingProgramsService extends StorageService<ObservingProgram> {

    constructor(
        http: HttpClient,
        jwtService: JwtService,
    ) {
        super('/observing-programs', http, jwtService);
    }

    public createNew(params?: any): ObservingProgram {
        return new ObservingProgram(params);
    }

    public getStatistics(request: ObservingProgramStatisticsRequestParams): Promise<PaginatedResponsePayload<TargetStatistics>> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': this.getAuthorizationToken()
            })
        };

        return new Promise<PaginatedResponsePayload<TargetStatistics>>((success) => {
            const url = `${this.getUrl()}/statistics/${request.observingProgramId}?${request.getQueryString()}`;

            this.http.get<any>(url, httpOptions)
                .subscribe(response => {
                    success({
                        ...response,
                        items: response.items.map((item: any) => this.parseTargetStatistics(item)),
                    });
                });
        });
    }

    public async getObservingProgramStatistics(observingProgramId: string): Promise<ObservingProgramStatistics> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': this.getAuthorizationToken()
            })
        };

        const url = `${this.getUrl()}/overall-statistics/${observingProgramId}`;

        const response = await this.http.get<any>(url, httpOptions).toPromise();
        return new ObservingProgramStatistics({
            totalCount: response.totalCount,
            observedCount: response.observedCount,
        });
    }

    parseTargetStatistics(state: any): TargetStatistics {
        return new TargetStatistics({
            target: state.target,
            observations: state.observations || [],
        });
    }
}
