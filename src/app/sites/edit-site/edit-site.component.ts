import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { EditEntityComponent } from '../../shared/components/edit-entity.component';
import { SiteService } from '../shared/site.service';
import { Site } from '../../shared/models/models';
import { SiteComponent } from '../site';

@Component({
  selector: 'om-edit-site',
  templateUrl: 'edit-site.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatButtonModule,
    SiteComponent,
    NgIf,
    AsyncPipe,
  ],
})
export class EditSiteComponent extends EditEntityComponent<Site> {

  constructor(
    service: SiteService,
  ) {
    super(service);
  }

  protected getItemId(): string {
    return this.route.snapshot.paramMap.get('id');
  }

}
