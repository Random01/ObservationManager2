import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { Target } from '../../shared/models/models';
import { TargetService } from '../shared/target.service';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
  selector: 'om-add-target',
  templateUrl: './add-target.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTargetComponent extends AddEntityComponent<Target> {

  constructor(
    private readonly router: Router,
    service: TargetService,
    appContext: AppContextService,
  ) {
    super(service, appContext);
  }

  public goBack() {
    this.router.navigate(['/objects']);
  }
}
