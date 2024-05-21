import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';
import { TargetService } from '../shared/target.service';
import { Target } from '../../shared/models/models';

@Component({
  selector: 'om-edit-target',
  templateUrl: 'edit-target.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditTargetComponent extends EditEntityComponent<Target> {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    service: TargetService,
  ) {
    super(service);
  }

  public getItemId(): string {
    return this.route.snapshot.paramMap.get('id');
  }

  public goBack() {
    this.router.navigate(['/objects']);
  }

}
