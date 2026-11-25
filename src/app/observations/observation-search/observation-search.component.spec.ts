import { EyepieceService } from '../../eyepieces/shared/eyepiece.service';
import { FilterService } from '../../filters/shared/filter.service';
import { LensService } from '../../lenses/shared/lens.service';
import { ScopeService } from '../../scopes/shared/scope.service';
import { Eyepiece, Filter, Lens, Scope } from '../../shared/models/equipment/equipment';
import { Site } from '../../shared/models/site.model';
import { SiteService } from '../../sites/shared/site.service';
import { ObservationSearchComponent } from './observation-search.component';

describe('ObservationSearchComponent', () => {
  it('populates each search filter with options from its corresponding service', async () => {
    const scopes = [new Scope({ id: 'scope-1' })];
    const eyepieces = [new Eyepiece({ id: 'eyepiece-1' })];
    const filters = [new Filter({ id: 'filter-1' })];
    const lenses = [new Lens({ id: 'lens-1' })];
    const sites = [new Site({ id: 'site-1' })];
    const component = new ObservationSearchComponent(
      jasmine.createSpyObj<ScopeService>('ScopeService', { getAll: Promise.resolve(scopes) }),
      jasmine.createSpyObj<EyepieceService>('EyepieceService', { getAll: Promise.resolve(eyepieces) }),
      jasmine.createSpyObj<FilterService>('FilterService', { getAll: Promise.resolve(filters) }),
      jasmine.createSpyObj<LensService>('LensService', { getAll: Promise.resolve(lenses) }),
      jasmine.createSpyObj<SiteService>('SiteService', { getAll: Promise.resolve(sites) }),
    );
    component.ngOnInit();
    await Promise.resolve();

    expect(component.scopes).toBe(scopes);
    expect(component.eyepieces).toBe(eyepieces);
    expect(component.filters).toBe(filters);
    expect(component.lenses).toBe(lenses);
    expect(component.sites).toBe(sites);
  });
});
