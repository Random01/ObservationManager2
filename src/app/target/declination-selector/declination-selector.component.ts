import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dec } from '../../shared/models/dec.model';

@Component({
    selector: 'om-declination-selector',
    templateUrl: './declination-selector.component.html',
    styleUrls: ['./declination-selector.component.css']
})
export class DeclinationSelectorComponent {

    @Input() dec: Dec;
    @Output() decChange = new EventEmitter<Dec>();

    constructor() {
    }

}
