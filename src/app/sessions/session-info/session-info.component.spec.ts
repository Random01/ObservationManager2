import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { provideMockStore } from '@ngrx/store/testing';

import { SessionInfoComponent } from './session-info.component';
import { Session } from '../../shared/models/session.model';

describe('SessionInfoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionInfoComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [provideMockStore(), provideNoopAnimations()],
    }).compileComponents();
  });

  it('should work', () => {
    const fixture = TestBed.createComponent(SessionInfoComponent);
    const session = new Session();
    fixture.componentRef.setInput('session', session);

    fixture.detectChanges();

    expect(fixture.componentInstance.session()).toBe(session);
  });
});
