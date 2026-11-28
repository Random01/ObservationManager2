import { Session } from './session.model';

describe('Session', () => {
  it('reads a populated site and preserves dates and notes when serializing the session', () => {
    const session = new Session();
    session.deserialize({
      _id: 'session-1',
      site: { _id: 'site-1', name: 'Dark sky park', longitude: -105.5, latitude: 40.5, elevation: 2200 },
      userCreated: { _id: 'observer-1' },
      userUpdated: { _id: 'observer-2' },
      begin: '2026-10-01T20:00:00Z',
      end: '2026-10-02T01:00:00Z',
      equipment: '10-inch reflector',
      weather: 'Clear',
      comments: 'Low humidity',
    });

    expect(session.site?.getDisplayName()).toBe('Dark sky park');
    expect(session.site?.isValid()).toBeTrue();
    expect(session.site?.serialize()).toEqual(jasmine.objectContaining({ longitude: -105.5, latitude: 40.5, elevation: 2200 }));
    expect(session.userCreated?.id).toBe('observer-1');
    expect(session.userUpdated?.id).toBe('observer-2');
    expect(session.serialize()).toEqual({
      id: 'session-1',
      description: undefined,
      site: 'site-1',
      begin: '2026-10-01T20:00:00.000Z',
      end: '2026-10-02T01:00:00.000Z',
      equipment: '10-inch reflector',
      weather: 'Clear',
      comments: 'Low humidity',
    });
  });
});
