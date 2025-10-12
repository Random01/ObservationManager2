import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { Site } from '../../shared/models/models';
import { SiteService } from '../shared/site.service';
import { SiteComponent } from '../site';

@Component({
  selector: 'om-add-site',
  templateUrl: 'add-site.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, SiteComponent, AsyncPipe],
})
export class AddSiteComponent extends AddEntityComponent<Site> {
  constructor(service: SiteService) {
    super(service);
  }
}
