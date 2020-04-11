import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Degrees } from '../../models/degrees.model';

@Component({
    selector: 'om-degrees-input',
    templateUrl: './degrees-input.component.html',
    styleUrls: ['./degrees-input.component.css']
})
export class DegreesInputComponent {

    @Input() degrees: Degrees;
    @Output() degreesChange = new EventEmitter<Degrees>();

}
