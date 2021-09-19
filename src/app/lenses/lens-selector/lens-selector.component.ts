import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import { Lens } from '../../shared/models/equipment/equipment';
import { LensService } from '../shared/lens.service';
import { EntitySelectorComponent } from '../../shared/components/entity-selector/entity-selector.component';
import { AddLensDialogService } from '../add-lens-dialog';

@Component({
  selector: 'om-lens-selector',
  templateUrl: '../../shared/components/entity-selector/entity-selector.component.html',
  styleUrls: [
    '../../shared/components/entity-selector/entity-selector.component.css'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LensSelectorComponent extends EntitySelectorComponent<Lens, LensService> {

  constructor(
    lensService: LensService,
    addLensDialogService: AddLensDialogService,
    cdRef: ChangeDetectorRef,
  ) {
    super(lensService, addLensDialogService, cdRef);

    this.placeholder = 'Lenses';
  }

}
