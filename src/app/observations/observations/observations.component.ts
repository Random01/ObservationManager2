import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { BehaviorSubject } from 'rxjs';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { Observation } from '../../shared/models/models';
import { ObservationService } from '../shared/observation.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import ObservationSearchParameters from '../observation-search/observation-search-parameters.model';
import { RequestParams } from '../../shared/services/request-params.model';
import { ObservationSearchComponent } from '../observation-search/observation-search.component';

@Component({
  selector: 'om-observations',
  templateUrl: 'observations.component.html',
  styleUrl: 'observations.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatExpansionModule, MatPaginatorModule, MatTableModule, MatButtonModule, MatIconModule, MatTooltipModule, AsyncPipe, RouterLink, ObservationSearchComponent],
})
export class ObservationsComponent extends EntityListComponent<Observation> {
  private readonly searchParametersSubject = new BehaviorSubject<ObservationSearchParameters>(new ObservationSearchParameters());
  public readonly searchParameters$ = this.searchParametersSubject.asObservable();

  public readonly displayedColumns: string[] = ['targetName', 'scopeModel', 'eyepieceModel', 'filterModel', 'result', 'actions'];

  constructor(observationService: ObservationService, deleteEntityDialogService: DeleteEntityDialogService, route: ActivatedRoute, router: Router) {
    super(observationService, deleteEntityDialogService, route, router);
  }

  public search(): void {
    this.loadItems();
  }

  public clearSearch(): void {
    this.searchParametersSubject.next(new ObservationSearchParameters());
    this.search();
  }

  protected override getRequestParams(params?: Partial<RequestParams>): RequestParams {
    return new ObservationSearchParameters({
      ...this.searchParametersSubject.getValue(),
      ...params,
    });
  }
}
