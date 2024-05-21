import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { Site } from '../../shared/models/models';
import { SiteService } from '../shared/site.service';

@Component({
  selector: 'om-add-site',
  templateUrl: 'add-site.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddSiteComponent extends AddEntityComponent<Site> {

  constructor(
    private readonly router: Router,
    service: SiteService,
  ) {
    super(service);
  }

  public goBack() {
    this.router.navigate(['/sites']);
  }
}
