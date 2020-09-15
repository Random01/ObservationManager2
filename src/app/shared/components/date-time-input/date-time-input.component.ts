import {
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

import * as moment from 'moment';

@Component({
    selector: 'om-date-time-input',
    templateUrl: './date-time-input.component.html',
    styleUrls: ['./date-time-input.component.css']
})
export class DateTimeInputComponent {

    private _date: Date;

    get dateTime(): Date {
        return this._date;
    }

    @Input()
    set dateTime(value: Date) {
        this._date = value;
    }

    get time(): string {
        if (this.dateTime) {
            return moment(this.dateTime).format('HH:mm');
        }
        return '';
    }

    set time(value: string) {
        if (value) {
            const [hours, minutes] = value.split(':');
            this._date.setHours(parseFloat(hours), parseFloat(minutes));
        }
    }

    @Output() dateTimeChange = new EventEmitter<Date>();

    @Input() datePlaceholder: string;
    @Input() timePlaceholder: string;
    @Input() dateHint: string;
    @Input() timeHint: string;

    onDateChanged(): void {
        this.dateTimeChange.emit(this.dateTime);
    }

    onTimeChanged(): void {

    }
}
