import { DateTimeInputComponent } from './date-time-input.component';

describe('DateTimeInputComponent', () => {
  it('reads and changes the local time without changing the date', () => {
    const component = new DateTimeInputComponent();
    expect(component.time).toBe('');
    component.dateTime = new Date(2026, 9, 1, 8, 5);
    expect(component.time).toBe('08:05');

    component.time = '21:30';
    expect(component.dateTime).toEqual(new Date(2026, 9, 1, 21, 30));
    component.time = '';
    expect(component.time).toBe('21:30');
  });

  it('emits the selected date and time', () => {
    const component = new DateTimeInputComponent();
    const selected = new Date(2026, 9, 1, 21, 30);
    const changed = jasmine.createSpy('changed');
    component.dateTimeChange.subscribe(changed);
    component.dateTime = selected;
    component.onDateChanged();
    expect(changed).toHaveBeenCalledOnceWith(selected);
  });
});
