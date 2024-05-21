import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Site } from '../../shared/models/site.model';
import { SiteService } from '../shared/site.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';

@Component({
  selector: 'om-sites',
  templateUrl: 'sites.component.html',
  styleUrls: ['sites.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SitesComponent extends EntityListComponent<Site> {

  public readonly displayedColumns: string[] = [
    'name',
    'timezone',
    'latitude',
    'longitude',
    'elevation',
    'actions',
  ];

  constructor(
    siteService: SiteService,
    deleteEntityDialogService: DeleteEntityDialogService,
    route: ActivatedRoute,
    router: Router,
  ) {
    super(
      siteService,
      deleteEntityDialogService,
      route,
      router,
    );
  }

  protected override getExportFileName(): string {
    return 'sites';
  }

}
