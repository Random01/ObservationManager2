import { Component, Input, OnInit } from '@angular/core';

import { DeepSkyFindingDetails } from '../../../shared/models/finding-details/deep-sky-finding-details.model';

@Component({
    selector: 'om-deep-sky-finding-details',
    templateUrl: './deep-sky-finding-details.component.html',
    styleUrls: ['./deep-sky-finding-details.component.css']
})
export class DeepSkyFindingDetailsComponent implements OnInit {

    @Input() public findingDetails: DeepSkyFindingDetails | null = null;

    ngOnInit() {
    }
}
