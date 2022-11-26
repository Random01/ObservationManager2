import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

import { Scope } from '../../shared/models/equipment/equipment';
import { AddEntityDialogComponent } from '../../shared/components/add-entity-dialog.component';
import { ScopeService } from '../shared/scope.service';

@Component({
  selector: 'om-add-scope-dialog',
  templateUrl: './add-scope-dialog.component.html',
  styleUrls: [
    './add-scope-dialog.component.css'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddScopeDialogComponent extends AddEntityDialogComponent<Scope, ScopeService> {

  constructor(
    storageService: ScopeService,
    dialogRef: MatDialogRef<AddScopeDialogComponent, Scope>,
  ) {
    super(storageService, dialogRef);
  }

}
