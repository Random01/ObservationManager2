import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AsyncPipe, DecimalPipe } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

import { Site } from '../../shared/models/site.model';
import { SiteService } from '../shared/site.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { DegreesFormatterPipe } from '../../shared/models/pipes';

@Component({
  selector: 'om-sites',
  templateUrl: 'sites.component.html',
  styleUrls: ['sites.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatPaginatorModule, MatTableModule, MatButtonModule, MatTooltipModule, MatIconModule, RouterLink, AsyncPipe, DecimalPipe, DegreesFormatterPipe],
})
export class SitesComponent extends EntityListComponent<Site> {
  public readonly displayedColumns: string[] = ['name', 'timezone', 'latitude', 'longitude', 'elevation', 'actions'];

  constructor(siteService: SiteService, deleteEntityDialogService: DeleteEntityDialogService, route: ActivatedRoute, router: Router) {
    super(siteService, deleteEntityDialogService, route, router);
  }

  protected override getExportFileName(): string {
    return 'sites';
  }
}
