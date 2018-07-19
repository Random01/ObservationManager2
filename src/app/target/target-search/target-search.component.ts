import { Component, OnInit } from '@angular/core';

import { Target } from '../../shared/models/target.model';
import { TargetService } from '../shared/target.service';

@Component({
    selector: 'om-target-search',
    templateUrl: './target-search.component.html',
    providers: [
        TargetService
    ]
})

export class TargetSearchComponent implements OnInit {

    targes: Target[];

    constructor(private targetService: TargetService) {
    }

    ngOnInit(): void {
        this.targetService
            .getAll()
            .then((targets) => this.targes = targets);
    }

}
