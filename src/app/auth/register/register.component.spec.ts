import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { RegisterComponent } from './register.component';
import { AppContextService } from '../../shared/services/app-context.service';

describe('RegisterComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Store, useValue: { select: () => of() } },
        { provide: AppContextService, useValue: {} },
      ],
    }).compileComponents();
  });

  it('should work', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const component = fixture.debugElement.componentInstance;

    fixture.detectChanges();

    expect(component).toBeDefined();
  });

});
