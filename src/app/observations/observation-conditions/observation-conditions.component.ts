import { Component, Input, OnInit } from '@angular/core';

import { Observation } from '../../shared/models/models';
import { SeeingType } from '../../shared/models/seeing-type.model';
import { SeeingTypeService } from '../shared';

interface SeeingItem {
    name: string;
    seeing: SeeingType;
}

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
        private seeingTypeService: SeeingTypeService) {
    }

    ngOnInit() {
        this.seeingTypeService.getSeeingOptions().then((seeingTypes) => {
            this.seeingTypes = seeingTypes;
        });
    }

}
