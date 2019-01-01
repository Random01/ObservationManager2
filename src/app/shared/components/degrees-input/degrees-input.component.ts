import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Degrees } from '../../models/degrees.model';

@Component({
    selector: 'om-degrees-selector',
    templateUrl: './degrees-selector.component.html',
    styleUrls: ['./degrees-selector.component.css']
})
export class DegreesSelectorComponent {

    @Input() degrees: Degrees;
    @Output() degreesChange = new EventEmitter<Degrees>();

    constructor() {
    }

}
