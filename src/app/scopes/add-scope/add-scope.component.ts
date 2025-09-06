import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { ScopeService } from '../shared/scope.service';
import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { Scope } from '../../shared/models/equipment/equipment';
import { ScopeComponent } from '../scope';

@Component({
    selector: 'om-add-scope',
    templateUrl: 'add-scope.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
    MatButtonModule,
    ScopeComponent,
    AsyncPipe
]
})
export class AddScopeComponent extends AddEntityComponent<Scope> {

  constructor(
    service: ScopeService,
  ) {
    super(service);
  }

}
