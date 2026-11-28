import { Observation } from './observation.model';
import { SeeingType } from './seeing-type.model';

describe('Observation', () => {
  it('reads populated records and serializes references as IDs for saving', () => {
    const observation = new Observation();
    observation.deserialize({
      _id: 'observation-1',
      description: 'First sighting',
      observer: { _id: 'observer-1', name: 'Vera' },
      session: 'session-1',
      target: { _id: 'target-1', name: 'M31', position: { ra: 10, dec: 41 } },
      begin: '2026-10-01T22:00:00+04:00',
      end: '2026-10-01T18:15:00Z',
      scope: { _id: 'scope-1', model: 'Reflector', focalLength: 1000 },
      eyepiece: { _id: 'eyepiece-1', focalLength: 10 },
      filter: 'filter-1',
      lens: { _id: 'lens-1', factor: 2 },
      seeing: SeeingType.Slight,
      result: { description: 'Bright nucleus', lang: 'en', rating: 3 },
      faintestStar: 5.5,
      skyQuality: 21.2,
      magnification: 200,
    });

    expect(observation.begin).toEqual(new Date('2026-10-01T18:00:00Z'));
    expect(observation.observer.name).toBe('Vera');
    expect(observation.target?.name).toBe('M31');
    expect(observation.scope?.focalLength).toBe(1000);
    expect(observation.eyepiece?.focalLength).toBe(10);
    expect(observation.lens?.factor).toBe(2);
    expect(observation.serialize()).toEqual({
      id: 'observation-1',
      description: 'First sighting',
      observer: 'observer-1',
      session: 'session-1',
      site: null,
      target: 'target-1',
      begin: '2026-10-01T18:00:00.000Z',
      end: '2026-10-01T18:15:00.000Z',
      scope: 'scope-1',
      eyepiece: 'eyepiece-1',
      filter: 'filter-1',
      lens: 'lens-1',
      seeing: SeeingType.Slight,
      result: { description: 'Bright nucleus', lang: 'en', rating: 3, type: undefined },
      faintestStar: 5.5,
      skyQuality: 21.2,
      magnification: 200,
    });
  });

  it('represents a missing end time as null', () => {
    const observation = new Observation();
    observation.deserialize({ _id: 'observation-1', begin: '2026-10-01T18:00:00Z' });

    expect(observation.end).toBeNull();
    expect(observation.serialize()['end']).toBeNull();
  });
});
