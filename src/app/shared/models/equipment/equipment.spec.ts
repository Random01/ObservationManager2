import { Eyepiece } from './eyepiece.model';
import { FilterType } from './filter-type.enum';
import { Filter } from './filter.model';
import { Lens } from './lens.model';
import { OpticsType } from './optics-type.model';
import { Scope } from './scope.model';

describe('Equipment serialization', () => {
  it('keeps the focal length range of a zoom eyepiece', () => {
    const eyepiece = new Eyepiece();
    eyepiece.deserialize({ _id: 'zoom-1', model: 'Zoom', vendor: 'Vendor', focalLength: 8, maxFocalLength: 24, apparentFOV: 60 });

    expect(eyepiece.isZoomEyepiece).toBeTrue();
    expect(new Eyepiece({ focalLength: 10 }).isZoomEyepiece).toBeFalse();
    expect(eyepiece.getDisplayName()).toBe('Zoom');
    expect(eyepiece.isValid()).toBeTrue();
    expect(new Eyepiece({ model: ' ' }).isValid()).toBeFalse();
    expect(eyepiece.serialize()).toEqual(
      jasmine.objectContaining({
        id: 'zoom-1',
        model: 'Zoom',
        vendor: 'Vendor',
        focalLength: 8,
        maxFocalLength: 24,
        apparentFOV: 60,
      }),
    );
  });

  it('serializes a scope with or without a specified optics type', () => {
    const type = new OpticsType();
    type.deserialize({ name: 'Newtonian' });
    const scope = new Scope({ model: 'Reflector', aperture: 200, focalLength: 1000, type });

    expect(scope.serialize()).toEqual(
      jasmine.objectContaining({
        model: 'Reflector',
        aperture: 200,
        focalLength: 1000,
        type: { name: 'Newtonian' },
      }),
    );
    expect(new Scope().serialize()['type']).toBeNull();
  });

  it('preserves the filter type and lens factor in save payloads', () => {
    const filter = new Filter();
    filter.deserialize({ _id: 'filter-1', filterType: FilterType.OIII });
    const lens = new Lens();
    lens.deserialize({ _id: 'lens-1', factor: 2 });

    expect(filter.serialize()).toEqual(jasmine.objectContaining({ id: 'filter-1', filterType: FilterType.OIII }));
    expect(lens.serialize()).toEqual(jasmine.objectContaining({ id: 'lens-1', factor: 2 }));
  });
});
