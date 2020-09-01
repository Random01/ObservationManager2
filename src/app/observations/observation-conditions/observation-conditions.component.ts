import { Component, Input, OnInit } from '@angular/core';

import { Observation } from '../../shared/models/models';
import { SeeingTypeService } from '../shared';
import { SeeingItem } from '../shared/seeing-type.interface';

@Component({
    selector: 'om-observation-conditions',
    templateUrl: './observation-conditions.component.html',
    styleUrls: [
        './observation-conditions.component.css'
    ]
})
export class ObservationConditionsComponent implements OnInit {

    @Input()
    observation: Observation;

    seeingTypes: SeeingItem[];

    constructor(
        private seeingTypeService: SeeingTypeService,
    ) {
    }

    async ngOnInit() {
        this.seeingTypes = await this.seeingTypeService.getSeeingOptions();
    }

}
