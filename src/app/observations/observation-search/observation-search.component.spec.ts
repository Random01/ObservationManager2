import { TestBed } from '@angular/core/testing';
import { MatSelect } from '@angular/material/select';
import { By } from '@angular/platform-browser';

import { EyepieceService } from '../../eyepieces/shared/eyepiece.service';
import { FilterService } from '../../filters/shared/filter.service';
import { LensService } from '../../lenses/shared/lens.service';
import { ScopeService } from '../../scopes/shared/scope.service';
import { Eyepiece, Filter, Lens, Scope } from '../../shared/models/equipment/equipment';
import { Site } from '../../shared/models/site.model';
import { SiteService } from '../../sites/shared/site.service';
import { AddTargetDialogService } from '../../target/target-selector/add-target-dialog';
import { TargetService } from '../../target/shared/target.service';
import ObservationSearchParameters from './observation-search-parameters.model';
import { ObservationSearchComponent } from './observation-search.component';

describe('ObservationSearchComponent', () => {
  it('renders options that load after the first change detection pass', async () => {
    let releaseOptions!: () => void;
    const optionsReady = new Promise<void>((resolve) => (releaseOptions = resolve));
    TestBed.configureTestingModule({
      providers: [
        { provide: ScopeService, useValue: { getAll: () => optionsReady.then(() => [new Scope({ id: 'scope-1' })]) } },
        { provide: EyepieceService, useValue: { getAll: () => optionsReady.then(() => [new Eyepiece({ id: 'eyepiece-1' })]) } },
        { provide: FilterService, useValue: { getAll: () => optionsReady.then(() => [new Filter({ id: 'filter-1' })]) } },
        { provide: LensService, useValue: { getAll: () => optionsReady.then(() => [new Lens({ id: 'lens-1' })]) } },
        { provide: SiteService, useValue: { getAll: () => optionsReady.then(() => [new Site({ id: 'site-1' })]) } },
        { provide: TargetService, useValue: {} },
        { provide: AddTargetDialogService, useValue: {} },
      ],
    });
    const fixture = TestBed.createComponent(ObservationSearchComponent);
    fixture.componentRef.setInput('searchParameters', new ObservationSearchParameters());
    fixture.autoDetectChanges();
    const selects = fixture.debugElement.queryAll(By.directive(MatSelect));
    const optionValues = () => selects.map((select) => select.injector.get(MatSelect).options.map((option) => option.value));
    expect(optionValues()).toEqual([[undefined], [undefined], [undefined], [undefined], [undefined]]);

    releaseOptions();
    await optionsReady;
    await Promise.resolve();
    await fixture.whenStable();

    expect(optionValues()).toEqual([[undefined, 'site-1'], [undefined, 'scope-1'], [undefined, 'eyepiece-1'], [undefined, 'filter-1'], [undefined, 'lens-1']]);
  });
});
