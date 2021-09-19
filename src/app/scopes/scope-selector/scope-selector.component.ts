import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import { Scope } from '../../shared/models/equipment/equipment';
import { ScopeService } from '../shared/scope.service';
import { EntitySelectorComponent } from '../../shared/components/entity-selector/entity-selector.component';
import { AddScopeDialogService } from '../add-scope-dialog';

@Component({
  selector: 'om-scope-selector',
  templateUrl: '../../shared/components/entity-selector/entity-selector.component.html',
  styleUrls: [
    '../../shared/components/entity-selector/entity-selector.component.css'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScopeSelectorComponent extends EntitySelectorComponent<Scope, ScopeService> {

  constructor(
    scopeService: ScopeService,
    addScopeDialogService: AddScopeDialogService,
    cdRef: ChangeDetectorRef,
  ) {
    super(scopeService, addScopeDialogService, cdRef);

    this.placeholder = 'Telescopes, Binoculars & Finders';
  }

}
