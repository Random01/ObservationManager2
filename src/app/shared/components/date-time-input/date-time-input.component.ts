import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import moment from 'moment';

@Component({
    selector: 'om-date-time-input',
    templateUrl: 'date-time-input.component.html',
    styleUrl: 'date-time-input.component.css',
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        FormsModule,
    ]
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

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public onTimeChanged(): void {

  }
}
