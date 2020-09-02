import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ObservingProgramsService } from '../shared/observing-programs.service';
import { PaginatedListComponent } from '../../shared/components/paginated-list.component';
import { RequestParams } from '../../shared/services/request-params.model';
import { TargetStatistics } from '../shared/target-statistics.model';
import { ObservingProgramStatisticsRequestParams } from '../shared/observing-program-satistics-request-params.model';
import ObservingProgramStatistics from '../shared/observing-program-statistics.model';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
    selector: 'om-observing-program-statistics',
    templateUrl: './observing-program-statistics.component.html',
    styleUrls: ['./observing-program-statistics.component.css'],
})
export class ObservingProgramStatisticsComponent extends PaginatedListComponent<TargetStatistics> implements OnInit {

    public displayedColumns: string[] = [
        'name',
        'type',
        'constellation',
        'observed',
    ];

    public observingProgramStatistics: ObservingProgramStatistics;

    constructor(
        route: ActivatedRoute,
        router: Router,
        protected observingProgramService: ObservingProgramsService,
        appContext: AppContextService,
    ) {
        super(route, router, appContext);
    }

    protected getRequestParams(): RequestParams {
        const params = new ObservingProgramStatisticsRequestParams();

        params.size = this.pageSize;
        params.page = this.currentPage;
        params.sortDirection = this.sortDirection;
        params.sortField = this.sortField;
        params.observingProgramId = this.getObservingProgramId();

        return params;
    }

    async loadItems(): Promise<void> {
        const request = this.getRequestParams();
        const stat = await this.observingProgramService.getStatistics(request as ObservingProgramStatisticsRequestParams);

        this.items = stat.items;
        this.totalCount = stat.totalCount;
    }

    getObservingProgramId(): string {
        return this.route.snapshot.paramMap.get('programId');
    }

    goBack(): void {
        this.router.navigate(['/observing-programs']);
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.observingProgramService
            .getObservingProgramStatistics(this.getObservingProgramId())
            .then(response => {
                this.observingProgramStatistics = response;
            });
    }

}
