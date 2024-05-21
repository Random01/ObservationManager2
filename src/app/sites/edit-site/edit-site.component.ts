import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';
import { SiteService } from '../shared/site.service';
import { Site } from '../../shared/models/models';

@Component({
  selector: 'om-edit-site',
  templateUrl: 'edit-site.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditSiteComponent extends EditEntityComponent<Site> {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    service: SiteService,
  ) {
    super(service);
  }

  protected getItemId(): string {
    return this.route.snapshot.paramMap.get('id');
  }

  public goBack() {
    this.router.navigate(['/sites']);
  }

}
