import { Entity } from './entity.model';

describe('Entity', () => {
  it('reads a bare reference and serializes it as an ID when requested', () => {
    const entity = new Entity();
    entity.deserialize('entity-1');

    expect(entity.id).toBe('entity-1');
    expect(entity.serialize({ lightWeight: true })).toBe('entity-1');
    expect(entity.serialize({ lightWeight: false })).toEqual({ id: 'entity-1', description: undefined });
  });
});
