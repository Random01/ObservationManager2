import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { ScopeService } from '../shared/scope.service';

import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { Scope } from '../../shared/models/equipment/equipment';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
  selector: 'om-add-scope',
  templateUrl: './add-scope.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddScopeComponent extends AddEntityComponent<Scope> {

  constructor(
    private readonly router: Router,
    service: ScopeService,
    appContext: AppContextService,
  ) {
    super(service, appContext);
  }

  public goBack() {
    this.router.navigate(['/scopes']);
  }
}
