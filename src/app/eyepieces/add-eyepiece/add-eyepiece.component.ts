import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

import { EyepieceService } from '../shared/eyepiece.service';
import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { Eyepiece } from '../../shared/models/equipment/equipment';
import { AsyncPipe } from '@angular/common';
import { EyepieceComponent } from '../eyepiece';

@Component({
    selector: 'om-add-eyepiece',
    templateUrl: 'add-eyepiece.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
    MatButtonModule,
    AsyncPipe,
    EyepieceComponent
]
})
export class AddEyepieceComponent extends AddEntityComponent<Eyepiece> {

  constructor(
    eyepieceService: EyepieceService,
  ) {
    super(eyepieceService);
  }

}
