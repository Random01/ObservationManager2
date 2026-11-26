import { firstValueFrom } from 'rxjs';

import { ConstellationsService } from '../../constellations/shared/constellations.service';
import { Constellation } from '../../shared/models/constellation.model';
import { ConstellationSelectorComponent } from './constellation-selector.component';

describe('ConstellationSelectorComponent', () => {
  const constellation = Object.assign(new Constellation(), { name: 'Andromeda', code: 'And' });
  let service: jasmine.SpyObj<ConstellationsService>;
  let component: ConstellationSelectorComponent;

  beforeEach(() => {
    service = jasmine.createSpyObj<ConstellationsService>('ConstellationsService', ['getAll']);
    component = new ConstellationSelectorComponent(service);
  });

  it('loads the options and emits a selected constellation', async () => {
    service.getAll.and.resolveTo([constellation]);
    const pending = component.ngOnInit();
    expect(component.isLoading).toBeTrue();
    await pending;
    expect(component.isLoading).toBeFalse();
    expect(await firstValueFrom(component.filteredConstellations)).toEqual([constellation]);

    const changed = jasmine.createSpy('changed');
    component.constellationChange.subscribe(changed);
    component.onConstellationChange(constellation);
    expect(component.constellation).toBe(constellation);
    expect(changed).toHaveBeenCalledOnceWith(constellation);
  });

  it('clears the loading indication if the request fails', async () => {
    service.getAll.and.rejectWith(new Error('Unavailable'));
    await expectAsync(component.ngOnInit()).toBeRejectedWithError('Unavailable');
    expect(component.isLoading).toBeFalse();
  });
});
