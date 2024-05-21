import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { LensService } from '../shared/lens.service';
import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { Lens } from '../../shared/models/equipment/equipment';

@Component({
  selector: 'om-add-lens',
  templateUrl: 'add-lens.component.html',
})
export class AddLensComponent extends AddEntityComponent<Lens> {

  constructor(
    private readonly router: Router,
    lensService: LensService,
  ) {
    super(lensService);
  }

  public goBack() {
    this.router.navigate(['/lenses']);
  }
}
