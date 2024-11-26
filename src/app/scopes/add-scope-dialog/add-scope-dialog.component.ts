import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { Scope } from '../../shared/models/equipment/equipment';
import { AddEntityDialogComponent } from '../../shared/components/add-entity-dialog.component';
import { ScopeService } from '../shared/scope.service';
import { ScopeComponent } from '../scope';

@Component({
    selector: 'om-add-scope-dialog',
    templateUrl: 'add-scope-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatDialogModule,
        MatButtonModule,
        NgIf,
        AsyncPipe,
        ScopeComponent,
    ]
})
export class AddScopeDialogComponent extends AddEntityDialogComponent<Scope, ScopeService> {

  constructor(
    storageService: ScopeService,
    dialogRef: MatDialogRef<AddScopeDialogComponent, Scope>,
  ) {
    super(storageService, dialogRef);
  }

}
