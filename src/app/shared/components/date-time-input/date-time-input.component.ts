import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'om-date-time-input',
    templateUrl: './date-time-input.component.html',
    styleUrls: ['./date-time-input.component.css']
})
export class DateTimeInputComponent {

    @Input() dateTime: Date;
    @Output() dateTimeChange = new EventEmitter<Date>();

    @Input() datePlaceholder: string;
    @Input() timePlaceholder: string;
    @Input() dateHint: string;
    @Input() timeHint: string;

    constructor() {
    }

}
