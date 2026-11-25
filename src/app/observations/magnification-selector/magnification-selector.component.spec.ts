import { Eyepiece, Lens, Scope } from '../../shared/models/equipment/equipment';
import { MagnificationSelectorComponent } from './magnification-selector.component';

describe('MagnificationSelectorComponent', () => {
  let component: MagnificationSelectorComponent;

  beforeEach(() => {
    component = new MagnificationSelectorComponent();
    component.scope = new Scope({ focalLength: 1000 });
  });

  it('allows manual entry when the eyepiece is absent', () => {
    expect(component.calculateMagnification()).toBeNull();
    expect(component.isMagnificationInputDisabled()).toBeFalse();
  });

  it('calculates and rounds magnification for a fixed focal length', () => {
    component.eyepiece = new Eyepiece({ focalLength: 9 });

    expect(component.magnification).toBe(111);
    expect(component.isMagnificationInputDisabled()).toBeTrue();
  });

  it('uses the selected zoom focal length and applies the lens factor', () => {
    component.selectedFocalLength = 20;
    component.lens = new Lens({ factor: 2 });
    component.eyepiece = new Eyepiece({ focalLength: 8, maxFocalLength: 24 });

    expect(component.minFocalLength).toBe(8);
    expect(component.maxFocalLength).toBe(24);
    expect(component.magnification).toBe(100);
  });
});
