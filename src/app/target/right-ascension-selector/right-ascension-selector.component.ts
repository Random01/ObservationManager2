import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RA } from '../../shared/models/ra.model';

@Component({
    selector: 'om-right-ascension-selector',
    templateUrl: './right-ascension-selector.component.html',
    styleUrls: ['./right-ascension-selector.component.css']
})
export class RightAscensionSelectorComponent {

    @Input() ra: RA;
    @Output() decChange = new EventEmitter<RA>();

    hours: number;

    minutes: number;

    seconds: number;

    constructor() {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
    }

}