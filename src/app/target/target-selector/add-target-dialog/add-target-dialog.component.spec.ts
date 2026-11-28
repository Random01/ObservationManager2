import { TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';

import { ConstellationsService } from '../../../constellations/shared/constellations.service';
import { Target } from '../../../shared/models/target.model';
import { AddResultPayload } from '../../../shared/services/add-result-payload.model';
import { TargetTypeService } from '../../shared/target-type.service';
import { TargetService } from '../../shared/target.service';
import { AddTargetDialogComponent } from './add-target-dialog.component';

describe('AddTargetDialogComponent', () => {
  it('updates the Add button as the target editor changes and saves the entered name', async () => {
    const saved = new Target({ id: 'target-1', name: 'M31' });
    const add = jasmine.createSpy('add').and.returnValue(of(new AddResultPayload({ payload: saved })));
    const close = jasmine.createSpy('close');
    TestBed.configureTestingModule({
      providers: [
        { provide: TargetService, useValue: { createNew: Target, add } },
        { provide: MatDialogRef, useValue: { close } },
        { provide: TargetTypeService, useValue: { getAllTargetTypes: () => of([]) } },
        { provide: ConstellationsService, useValue: { getAll: () => Promise.resolve([]) } },
      ],
    });
    const fixture = TestBed.createComponent(AddTargetDialogComponent);
    fixture.autoDetectChanges();
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement;
    const name = element.querySelector<HTMLInputElement>('input[placeholder="Name"]')!;
    const addButton = element.querySelector<HTMLButtonElement>('[mat-dialog-actions] button:last-child')!;
    expect(addButton.disabled).toBeTrue();

    name.value = 'M31';
    name.dispatchEvent(new Event('input', { bubbles: true }));
    await fixture.whenStable();

    expect(addButton.disabled).toBeFalse();
    addButton.click();
    expect(add).toHaveBeenCalledOnceWith(jasmine.objectContaining({ name: 'M31' }));
    expect(close).toHaveBeenCalledOnceWith(saved);
  });
});
