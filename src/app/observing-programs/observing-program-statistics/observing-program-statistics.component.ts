import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { BehaviorSubject } from 'rxjs';

import { ObservingProgramsService } from '../shared/observing-programs.service';
import { PaginatedListComponent } from '../../shared/components/paginated-list.component';
import { RequestParams } from '../../shared/services/request-params.model';
import { TargetStatistics } from '../shared/target-statistics.model';
import { ObservingProgramStatisticsRequestParams } from '../shared/observing-program-statistics-request-params.model';
import ObservingProgramStatistics from '../shared/observing-program-statistics.model';
import { TargetTypeFormatterPipe } from '../../target/shared/pipes/target-type-formatter.pipe';

@Component({
    selector: 'om-observing-program-statistics',
    templateUrl: 'observing-program-statistics.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    AsyncPipe,
    TargetTypeFormatterPipe
]
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
  ) {
    super(route, router);
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
