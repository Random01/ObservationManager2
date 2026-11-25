import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of, Subject, timeout } from 'rxjs';

import { Target } from '../../shared/models/target.model';
import { TargetService } from '../shared/target.service';
import { AddTargetDialogService } from './add-target-dialog';
import { TargetSelectorComponent } from './target-selector.component';

describe('TargetSelectorComponent', () => {
  const target = new Target({ name: 'M31' });
  let component: TargetSelectorComponent;
  let search: jasmine.Spy<TargetService['search']>;
  let openDialog: jasmine.Spy<AddTargetDialogService['openDialog']>;

  beforeEach(() => {
    search = jasmine.createSpy('search').and.returnValue(of([target]));
    openDialog = jasmine.createSpy('openDialog');
    TestBed.configureTestingModule({
      providers: [
        { provide: TargetService, useValue: { search } },
        { provide: AddTargetDialogService, useValue: { openDialog } },
      ],
    });
    TestBed.overrideComponent(TargetSelectorComponent, { set: { template: '' } });
    const fixture = TestBed.createComponent(TargetSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debounces searches and avoids issuing a duplicate request for the same target name', async () => {
    const matches = new Subject<Target[]>();
    const subscription = component.targets$.subscribe(matches);
    try {
      const result = firstValueFrom(matches.pipe(timeout(2000)));
      component.search('M');
      component.search('M31');
      expect(search).not.toHaveBeenCalled();
      expect(await result).toEqual([target]);
      expect(search).toHaveBeenCalledOnceWith({ name: 'M31', maxCount: 10 });

      component.search(target);
      await new Promise((resolve) => setTimeout(resolve, 350));
      expect(search).toHaveBeenCalledTimes(1);
    } finally {
      subscription.unsubscribe();
    }
  });

  it('selects a target returned by the dialog and supports clearing the selection', async () => {
    openDialog.and.resolveTo(target);
    component.openDialog();
    await Promise.resolve();
    expect(component.target()).toBe(target);
    expect(component.displayFn(component.target())).toBe('M31');

    component.clearSelection();
    expect(component.target().name).toBeUndefined();
  });
});
