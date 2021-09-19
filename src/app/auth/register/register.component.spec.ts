import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { AppContextService } from '../../shared/services/app-context.service';
import { UserService } from '../../users/shared/user.service';

describe('RegisterComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: UserService, useValue: {} },
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
