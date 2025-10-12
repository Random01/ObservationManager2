import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { Eyepiece } from '../../shared/models/equipment/equipment';
import { EyepieceService } from '../shared/eyepiece.service';
import { EntitySelectorComponent } from '../../shared/components/entity-selector/entity-selector.component';
import { AddEyepieceDialogService } from '../add-eyepiece-dialog';

@Component({
  selector: 'om-eyepiece-selector',
  templateUrl: '../../shared/components/entity-selector/entity-selector.component.html',
  styleUrls: ['../../shared/components/entity-selector/entity-selector.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, MatSelectModule, MatIconModule, MatButtonModule, FormsModule],
})
export class EyepieceSelectorComponent extends EntitySelectorComponent<Eyepiece, EyepieceService> {
  constructor(eyepieceService: EyepieceService, addNewEyepieceDialogService: AddEyepieceDialogService, cdRef: ChangeDetectorRef) {
    super(eyepieceService, addNewEyepieceDialogService, cdRef);

    this.placeholder = 'Eyepieces';
  }
}
