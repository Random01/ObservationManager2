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
  styleUrls: ['./date-time-input.component.css'],
})
export class DateTimeInputComponent {

  private _date: Date;
  public get dateTime(): Date {
    return this._date;
  }

  @Input()
  public set dateTime(value: Date) {
    this._date = value;
  }

  public get time(): string {
    if (this.dateTime) {
      return moment(this.dateTime).format('HH:mm');
    }
    return '';
  }

  public set time(value: string) {
    if (value) {
      const [hours, minutes] = value.split(':');
      this._date.setHours(parseFloat(hours), parseFloat(minutes));
    }
  }

  @Output() public readonly dateTimeChange = new EventEmitter<Date>();

  @Input() public datePlaceholder: string;
  @Input() public timePlaceholder: string;
  @Input() public dateHint: string;
  @Input() public timeHint: string;

  public onDateChanged(): void {
    this.dateTimeChange.emit(this.dateTime);
  }

  public onTimeChanged(): void {

  }
}
