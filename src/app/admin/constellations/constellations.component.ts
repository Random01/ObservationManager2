import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Column } from '../common';

import { ConstellationsAdminService } from './constellations-admin.service';
import { BaseEntityService } from '../common/base-entity.service';

@Component({
  templateUrl: 'constellations.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: BaseEntityService,
    useClass: ConstellationsAdminService,
  }]
})
export class ConstellationsComponent {

  public readonly columns: Column[] = [
    { title: 'Field #1', field: 'field1' },
    { title: 'Field #2', field: 'field2' },
  ];

  public readonly displayedColumns: string[] = [
    'name',
    'actions',
  ];

}
