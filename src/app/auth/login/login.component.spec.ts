import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';

import { LoginComponent } from './login.component';
import { AppContextService } from '../../shared/services/app-context.service';

describe('LoginComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        provideMockStore(),
        { provide: AppContextService, useValue: {} },
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
