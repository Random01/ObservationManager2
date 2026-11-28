import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

import { Eyepiece, Scope, Lens } from '../../shared/models/equipment/equipment';

@Component({
  selector: 'om-magnification-selector',
  templateUrl: 'magnification-selector.component.html',
  styleUrl: 'magnification-selector.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, MatInputModule, MatSliderModule, FormsModule],
})
export class MagnificationSelectorComponent {
  // #region [Eyepiece]

  private _eyepiece?: Eyepiece;

  @Input()
  public get eyepiece(): Eyepiece | undefined {
    return this._eyepiece;
  }

  public set eyepiece(eyepiece: Eyepiece | undefined) {
    this._eyepiece = eyepiece;
    if (eyepiece) {
      this.minFocalLength = eyepiece.focalLength;
      this.maxFocalLength = eyepiece.maxFocalLength;
    }
    this.updateMagnification();
  }

  // #endregion

  // #region [Magnification]

  @Input() public magnification?: number | null;

  @Output()
  public readonly magnificationChange = new EventEmitter<number | null>();

  // #endregion

  // #region [Scope]

  private _scope?: Scope;

  @Input()
  public get scope(): Scope | undefined {
    return this._scope;
  }

  public set scope(scope: Scope | undefined) {
    this._scope = scope;
    this.updateMagnification();
  }

  // #endregion

  @Input() public lens?: Lens;

  minFocalLength = 1;
  maxFocalLength = 10;
  step = 1;
  selectedFocalLength = 3;

  calculateMagnification(): number | null {
    const scopeFocalLength = this.scope?.focalLength;
    if (scopeFocalLength != null && this.eyepiece) {
      const factor = this.lens?.factor ?? 1;
      const eyepieceFocalLength = this.eyepiece.isZoomEyepiece ? this.selectedFocalLength : this.eyepiece.focalLength;
      if (eyepieceFocalLength) {
        return Math.round((scopeFocalLength / eyepieceFocalLength) * factor);
      }
    }
    return null;
  }

  isMagnificationInputDisabled(): boolean {
    return this.eyepiece != null && this.eyepiece.focalLength != null;
  }

  isSliderVisible(): boolean {
    return !!this.eyepiece && !!this.eyepiece.isZoomEyepiece && false;
  }

  updateMagnification(): void {
    this.magnification = this.calculateMagnification();
  }
}
