import { Component } from '@angular/core';

import { Target } from '../../shared/models/target.model';
import { TargetService } from '../shared/target.service';

import { EntityListComponent } from '../../shared/components/entity-list.component';

@Component({
    selector: 'om-targets',
    templateUrl: './targets.component.html',
    providers: [TargetService]
})

export class TargetsComponent extends EntityListComponent<Target> {

    displayedColumns: string[] = [
        'name',
        'description',
        'actions'
    ];

    constructor(private service: TargetService) {
        super(service);
    }

}
