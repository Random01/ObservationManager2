import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';

import { LoginComponent } from './login.component';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        provideMockStore(),
        provideNoopAnimations(),
      ],
    }).compileComponents();
  });

  it('should work', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.debugElement.componentInstance;

    fixture.detectChanges();

    expect(component).toBeDefined();
  });

});
