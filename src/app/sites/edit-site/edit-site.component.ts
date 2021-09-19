import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';
import { SiteService } from '../shared/site.service';
import { Site } from '../../shared/models/models';
import { AppContextService } from '../../shared/services/app-context.service';

@Component({
  selector: 'om-edit-site',
  templateUrl: './edit-site.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditSiteComponent extends EditEntityComponent<Site> {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    service: SiteService,
    appContext: AppContextService,
  ) {
    super(service, appContext);
  }

  protected getItemId(): string {
    return this.route.snapshot.paramMap.get('id');
  }

  public goBack() {
    this.router.navigate(['/sites']);
  }

}
