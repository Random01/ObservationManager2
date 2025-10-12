import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';
import { Scope } from '../../shared/models/equipment/equipment';
import { ScopeService } from '../shared/scope.service';
import { ScopeComponent } from '../scope';

@Component({
  selector: 'om-edit-scope',
  templateUrl: 'edit-scope.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, ScopeComponent, AsyncPipe],
})
export class EditScopeComponent extends EditEntityComponent<Scope> {
  constructor(service: ScopeService) {
    super(service);
  }

  public getItemId(): string {
    return this.route.snapshot.paramMap.get('id');
  }
}
