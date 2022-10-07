import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Target } from '../../shared/models/target.model';
import { TargetService } from '../shared/target.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { TargetSearchParams } from '../target-search-params/target-search-params.model';
import { RequestParams } from '../../shared/services/request-params.model';
import { AppContextService } from '../../shared/services/app-context.service';
import { AuthenticationService } from '../../auth/shared';

@Component({
  selector: 'om-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TargetsComponent extends EntityListComponent<Target> {

  public searchParams = new TargetSearchParams();

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
    appContext: AppContextService,
    private readonly authService: AuthenticationService,
  ) {
    super(service, deleteEntityDialogService, route, router, appContext);
  }

  public onSearch(searchParams: TargetSearchParams) {
    this.searchParams = searchParams;
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

  protected override getRequestParams(): RequestParams {
    return this.searchParams;
  }

}
