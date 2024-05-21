import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';

import { Lens } from '../../shared/models/equipment/equipment';
import { LensService } from '../shared/lens.service';

@Component({
  selector: 'om-edit-lens',
  templateUrl: 'edit-lens.component.html',
})
export class EditLensComponent extends EditEntityComponent<Lens> {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    lensService: LensService,
  ) {
    super(lensService);
  }

  public getItemId(): string {
    return this.route.snapshot.paramMap.get('lensId');
  }

  public goBack() {
    this.router.navigate(['/lenses']);
  }

}
