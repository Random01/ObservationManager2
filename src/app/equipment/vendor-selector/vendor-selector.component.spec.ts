import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { of } from 'rxjs';

import { provideMockStore } from '@ngrx/store/testing';

import { VendorSelectorComponent } from './vendor-selector.component';
import { VendorService } from '../shared';
import { createMock } from '../../shared/helper-method/create-mock';


describe('VendorSelectorComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorSelectorComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        provideMockStore(),
        provideNoopAnimations(),
        {
          provide: VendorService,
          useValue: createMock<VendorService>({
            getAllSuggestions: () => of(),
          }),
        },
      ],
    }).compileComponents();
  });

  it('should work', () => {
    const fixture = TestBed.createComponent(VendorSelectorComponent);
    const component = fixture.debugElement.componentInstance;

    fixture.detectChanges();

    expect(component).toBeDefined();
  });

});
