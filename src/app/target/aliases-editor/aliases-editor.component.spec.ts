import { AliasesEditorComponent } from './aliases-editor.component';

describe('AliasesEditorComponent', () => {
  let component: AliasesEditorComponent;

  beforeEach(() => {
    component = new AliasesEditorComponent();
    component.aliases = ['NGC 224'];
  });

  it('rejects blank input and duplicate aliases even with surrounding spaces', () => {
    const added = jasmine.createSpy('added');
    component.aliasAdded.subscribe(added);

    for (const alias of ['  ', ' NGC 224 ']) {
      component.newAlias = alias;
      component.addNewAlias();
      expect(component.isValid).toBeFalse();
    }
    expect(added).not.toHaveBeenCalled();
  });

  it('emits additions and removals and resets the input after an addition', () => {
    const added = jasmine.createSpy('added');
    const removed = jasmine.createSpy('removed');
    component.aliasAdded.subscribe(added);
    component.aliasRemoved.subscribe(removed);
    component.newAlias = 'Andromeda Galaxy';

    component.addNewAlias();
    component.removeAlias('NGC 224');

    expect(added).toHaveBeenCalledOnceWith('Andromeda Galaxy');
    expect(removed).toHaveBeenCalledOnceWith('NGC 224');
    expect(component.newAlias).toBe('');
    expect(component.isValid).toBeFalse();
  });
});
