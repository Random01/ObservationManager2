import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';

import { Scope } from '../../shared/models/equipment/equipment';
import { ScopeService } from '../shared/scope.service';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
  selector: 'om-edit-scope',
  templateUrl: './edit-scope.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditScopeComponent extends EditEntityComponent<Scope> {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    service: ScopeService,
    appContext: AppContextService,
  ) {
    super(service, appContext);
  }

  public getItemId(): string {
    return this.route.snapshot.paramMap.get('id');
  }

  public goBack() {
    this.router.navigate(['/scopes']);
  }

}
