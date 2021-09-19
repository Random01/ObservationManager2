import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import { Eyepiece } from '../../shared/models/equipment/equipment';
import { EyepieceService } from '../shared/eyepiece.service';
import { EntitySelectorComponent } from '../../shared/components/entity-selector/entity-selector.component';
import { AddEyepieceDialogService } from '../add-eyepiece-dialog';

@Component({
  selector: 'om-eyepiece-selector',
  templateUrl: '../../shared/components/entity-selector/entity-selector.component.html',
  styleUrls: [
    '../../shared/components/entity-selector/entity-selector.component.css'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EyepieceSelectorComponent extends EntitySelectorComponent<Eyepiece, EyepieceService> {

  constructor(
    eyepieceService: EyepieceService,
    addNewEyepieceDialogService: AddEyepieceDialogService,
    cdRef: ChangeDetectorRef,
  ) {
    super(eyepieceService, addNewEyepieceDialogService, cdRef);

    this.placeholder = 'Eyepieces';
  }

}
