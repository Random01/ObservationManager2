import { Component, Input } from '@angular/core';
import { ObservingProgram } from '../../shared/models/observing-program.model';
import { TargetStatistics, ObservingProgramsService, ObservingProgramStatisticsRequestParams } from '../shared/observing-programs.service';
import { PaginatedListComponent } from '../../shared/components/paginated-list.component';
import { RequestParams } from '../../shared/services/request-params.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'om-observing-program-statistics',
    templateUrl: './observing-program-statistics.component.html',
    styleUrls: ['./observing-program-statistics.component.css']
})
export class ObservingProgramStatisticsComponent extends PaginatedListComponent<TargetStatistics> {

    displayedColumns: string[] = [
        'name',
        'actions'
    ];

    constructor(
        protected route: ActivatedRoute,
        protected router: Router,
        protected observingProgramService: ObservingProgramsService
    ) {
        super();
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
    }

    getObservingProgramId(): string {
        return this.route.snapshot.paramMap.get('observingProgramId');
    }
}
