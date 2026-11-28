import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';

import moment from 'moment';

@Component({
  selector: 'om-date-time-input',
  templateUrl: 'date-time-input.component.html',
  styleUrl: 'date-time-input.component.css',
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
})
export class DateTimeInputComponent {
  private _date: Date | null = null;
  public get dateTime(): Date | null {
    return this._date;
  }

  @Input()
  public set dateTime(value: Date | null) {
    this._date = value;
  }

  public get time(): string {
    if (this.dateTime) {
      return moment(this.dateTime).format('HH:mm');
    }
    return '';
  }

  public set time(value: string) {
    if (value && this._date) {
      const [hours, minutes] = value.split(':');
      const date = new Date(this._date);
      date.setHours(parseFloat(hours), parseFloat(minutes));
      this._date = date;
      this.dateTimeChange.emit(date);
    }
  }

  @Output() public readonly dateTimeChange = new EventEmitter<Date | null>();

  @Input() public datePlaceholder = '';
  @Input() public timePlaceholder = '';
  @Input() public dateHint = '';
  @Input() public timeHint = '';

  public onDateChanged(): void {
    this.dateTimeChange.emit(this.dateTime);
  }
}
