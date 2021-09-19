import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { EyepieceService } from '../shared/eyepiece.service';
import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { Eyepiece } from '../../shared/models/equipment/equipment';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
  selector: 'om-add-eyepiece',
  templateUrl: './add-eyepiece.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEyepieceComponent extends AddEntityComponent<Eyepiece> {

  constructor(
    private readonly router: Router,
    eyepieceService: EyepieceService,
    appContext: AppContextService,
  ) {
    super(eyepieceService, appContext);
  }

  public goBack() {
    this.router.navigate(['/eyepieces']);
  }
}
