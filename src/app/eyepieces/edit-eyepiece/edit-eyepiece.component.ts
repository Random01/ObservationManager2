import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';
import { Eyepiece } from '../../shared/models/equipment/equipment';
import { EyepieceService } from '../shared/eyepiece.service';
import { EyepieceComponent } from '../eyepiece';

@Component({
    selector: 'om-edit-eyepiece',
    templateUrl: 'edit-eyepiece.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
    MatButtonModule,
    AsyncPipe,
    EyepieceComponent
]
})
export class EditEyepieceComponent extends EditEntityComponent<Eyepiece> {

  constructor(
    eyepiece: EyepieceService,
  ) {
    super(eyepiece);
  }

  public getItemId(): string {
    return this.route.snapshot.paramMap.get('id');
  }

}
