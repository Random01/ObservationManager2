import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observation } from '../../shared/models/models';
import { ObservationService } from '../shared/observation.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import ObservationSearchParameters from '../observation-search/observation-search-parameters.model';
import { RequestParams } from '../../shared/services/request-params.model';
import { AppContextService } from '../../shared/services/app-context.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'om-observations',
  templateUrl: './observations.component.html',
  styleUrls: ['./observations.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservationsComponent extends EntityListComponent<Observation> {

  private readonly searchParametersSubject = new BehaviorSubject<ObservationSearchParameters>(
    new ObservationSearchParameters()
  );
  public readonly searchParameters$ = this.searchParametersSubject.asObservable();

  public readonly displayedColumns: string[] = [
    'targetName',
    'scopeModel',
    'eyepieceModel',
    'filterModel',
    'result',
    'actions',
  ];

  constructor(
    observationService: ObservationService,
    deleteEntityDialogService: DeleteEntityDialogService,
    route: ActivatedRoute,
    router: Router,
    appContext: AppContextService,
  ) {
    super(observationService, deleteEntityDialogService, route, router, appContext);
  }

  public search(): void {
    this.loadItems();
  }

  public clearSearch(): void {
    this.searchParametersSubject.next(new ObservationSearchParameters());
    this.search();
  }

  protected override getRequestParams(): RequestParams {
    return this.searchParametersSubject.getValue();
  }

}
