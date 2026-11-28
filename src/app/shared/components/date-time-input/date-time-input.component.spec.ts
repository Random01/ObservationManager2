import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DateTimeInputComponent } from './date-time-input.component';

@Component({
  imports: [DateTimeInputComponent],
  template: '<om-date-time-input [(dateTime)]="dateTime" />',
})
class DateTimeHost {
  readonly dateTime = signal<Date | null>(new Date(2026, 9, 1, 8, 5));
}

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

  it('updates the parent on a time-only edit and refreshes when the parent replaces the date', async () => {
    const fixture = TestBed.createComponent(DateTimeHost);
    fixture.autoDetectChanges();
    await fixture.whenStable();
    const original = fixture.componentInstance.dateTime();
    const element: HTMLElement = fixture.nativeElement;
    const time = element.querySelector<HTMLInputElement>('input[type="time"]')!;
    expect(time.value).toBe('08:05');

    time.value = '21:30';
    time.dispatchEvent(new Event('input', { bubbles: true }));
    await fixture.whenStable();

    expect(fixture.componentInstance.dateTime()).toEqual(new Date(2026, 9, 1, 21, 30));
    expect(original).toEqual(new Date(2026, 9, 1, 8, 5));

    fixture.componentInstance.dateTime.set(new Date(2026, 9, 2, 12, 15));
    await fixture.whenStable();
    expect(time.value).toBe('12:15');
  });
});
