import { TargetType } from './target-type.model';
import { Target } from './target.model';

describe('Target', () => {
  it('preserves aliases and equatorial coordinates and sends the constellation code', () => {
    const target = new Target();
    target.deserialize({
      _id: 'm31',
      name: 'M31',
      type: TargetType.Galaxy,
      alliases: ['NGC 224'],
      constellation: { code: 'And', name: 'Andromeda' },
      position: { ra: 10.5, dec: 41.25 },
    });

    expect(target.position.ra.minutes).toBe(42);
    expect(target.position.dec.arcminutes).toBe(15);
    expect(target.constellation.name).toBe('Andromeda');
    expect(target.isValid()).toBeTrue();
    expect(target.serialize()).toEqual(
      jasmine.objectContaining({
        id: 'm31',
        name: 'M31',
        type: TargetType.Galaxy,
        alliases: ['NGC 224'],
        constellation: 'And',
        position: { ra: 10.5, dec: 41.25 },
      }),
    );
  });

  it('requires a nonblank name', () => {
    const target = new Target();
    expect(target.isValid()).toBeFalse();
    target.name = '   ';
    expect(target.isValid()).toBeFalse();
  });
});
