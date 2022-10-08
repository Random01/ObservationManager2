import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

import { ObservingProgramsService } from '../shared/observing-programs.service';
import { PaginatedListComponent } from '../../shared/components/paginated-list.component';
import { RequestParams } from '../../shared/services/request-params.model';
import { TargetStatistics } from '../shared/target-statistics.model';
import { ObservingProgramStatisticsRequestParams } from '../shared/observing-program-statistics-request-params.model';
import ObservingProgramStatistics from '../shared/observing-program-statistics.model';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
  selector: 'om-observing-program-statistics',
  templateUrl: './observing-program-statistics.component.html',
  styleUrls: ['./observing-program-statistics.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservingProgramStatisticsComponent extends PaginatedListComponent<TargetStatistics> implements OnInit {

  public readonly displayedColumns: string[] = [
    'name',
    'type',
    'constellation',
    'observed',
  ];

  private readonly statisticsSubject = new BehaviorSubject<ObservingProgramStatistics>(null);
  public readonly statistics$ = this.statisticsSubject.asObservable();

  constructor(
    private readonly observingProgramService: ObservingProgramsService,
    route: ActivatedRoute,
    router: Router,
    appContext: AppContextService,
  ) {
    super(route, router, appContext);
  }

  public override async loadItems(): Promise<void> {
    const request = this.getRequestParams();
    const stat = await this.observingProgramService.getStatistics(request as ObservingProgramStatisticsRequestParams);

    this.itemsSubject$.next(stat);
  }

  public goBack(): void {
    this.router.navigate(['/observing-programs']);
  }

  public override ngOnInit(): void {
    super.ngOnInit();

    this.observingProgramService
      .getObservingProgramStatistics(this.getObservingProgramId())
      .then(response => this.statisticsSubject.next(response));
  }

  private getObservingProgramId(): string {
    return this.route.snapshot.paramMap.get('programId');
  }

  protected override getRequestParams(): RequestParams {
    return new ObservingProgramStatisticsRequestParams({
      size: this.pageSize,
      page: this.currentPage,
      sortDirection: this.sortDirection,
      sortField: this.sortField,
      observingProgramId: this.getObservingProgramId(),
    });
  }

}
