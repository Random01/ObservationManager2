import { Target } from '../../shared/models/target.model';
import { TargetsEditorComponent } from './targets-editor.component';

describe('TargetsEditorComponent', () => {
  const andromeda = new Target({ name: 'M31' });
  const triangulum = new Target({ name: 'M33' });
  let component: TargetsEditorComponent;

  beforeEach(() => {
    component = new TargetsEditorComponent();
    component.targets = [andromeda, triangulum];
  });

  it('slices the target list when the page changes', () => {
    component.ngOnChanges({});
    expect(component.paginatedTargets).toEqual([andromeda, triangulum]);

    component.onPageChanged({ pageIndex: 1, pageSize: 1, length: 2 });
    expect(component.paginatedTargets).toEqual([triangulum]);
  });

  it('emits the updated target list on addition and removal', () => {
    const changes: Target[][] = [];
    component.targetsChange.subscribe((targets) => changes.push([...targets]));
    component.addNewTarget();
    expect(changes).toEqual([]);

    const pinwheel = new Target({ name: 'M101' });
    component.newTarget = pinwheel;
    component.addNewTarget();
    component.removeTarget(andromeda);

    expect(changes).toEqual([
      [andromeda, triangulum, pinwheel],
      [triangulum, pinwheel],
    ]);
    expect(component.newTarget).toBeNull();
  });
});
