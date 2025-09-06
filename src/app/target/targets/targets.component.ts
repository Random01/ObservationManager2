import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { BehaviorSubject } from 'rxjs';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

import { Target } from '../../shared/models/target.model';
import { TargetService } from '../shared/target.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { TargetSearchParams } from '../target-search-params/target-search-params.model';
import { RequestParams } from '../../shared/services/request-params.model';
import { AuthenticationService } from '../../auth/shared';
import { TargetSearchParamsComponent } from "../target-search-params/target-search-params.component";
import { TargetTypeFormatterPipe } from "../shared/pipes/target-type-formatter.pipe";

@Component({
    selector: 'om-targets',
    templateUrl: 'targets.component.html',
    styleUrl: 'targets.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    AsyncPipe,
    RouterLink,
    TargetSearchParamsComponent,
    TargetTypeFormatterPipe
]
})
export class TargetsComponent extends EntityListComponent<Target> {

  private readonly searchParametersSubject = new BehaviorSubject<TargetSearchParams>(
    new TargetSearchParams()
  );
  public readonly searchParameters$ = this.searchParametersSubject.asObservable();

  public readonly displayedColumns: string[] = [
    'name',
    'type',
    'constellation',
    'alliases',
    'actions',
  ];

  constructor(
    service: TargetService,
    deleteEntityDialogService: DeleteEntityDialogService,
    route: ActivatedRoute,
    router: Router,
    private readonly authService: AuthenticationService,
  ) {
    super(service, deleteEntityDialogService, route, router);
  }

  public onSearch(searchParams: TargetSearchParams) {
    this.searchParametersSubject.next(searchParams);
    this.loadItems();
  }

  public canEdit(target: Target) {
    return this.isCreatedByUser(target);
  }

  public canDelete(target: Target) {
    return this.isCreatedByUser(target);
  }

  public isCreatedByUser(target: Target) {
    return target.userCreated?.id != null
      && (target.userCreated?.id === this.authService.getCurrentUser().id);
  }

  protected override getRequestParams(params?: Partial<RequestParams>): RequestParams {
    return new TargetSearchParams({
      ...this.searchParametersSubject.getValue(),
      ...params,
    });
  }

}
