import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  Eyepiece,
  Scope,
  Lens
} from '../../shared/models/equipment/equipment';

@Component({
  selector: 'om-magnification-selector',
  templateUrl: './magnification-selector.component.html',
  styleUrls: ['./magnification-selector.component.css'],
})
export class MagnificationSelectorComponent {

  // #region [Eyepiece]

  private _eyepiece: Eyepiece;

  @Input()
  public get eyepiece(): Eyepiece {
    return this._eyepiece;
  }

  public set eyepiece(eyepiece: Eyepiece) {
    this._eyepiece = eyepiece;
    if (eyepiece) {
      this.minFocalLength = eyepiece.focalLength;
      this.maxFocalLength = eyepiece.maxFocalLength;
    }
    this.updateMagnification();
  }

  // #endregion

  // #region [Magnification]

  private _magnification: number;

  @Input()
  public get magnification(): number {
    return this._magnification;
  }

  public set magnification(magnification: number) {
    this._magnification = magnification;
  }

  @Output()
  public readonly magnificationChange = new EventEmitter<number>();

  // #endregion

  // #region [Scope]

  private _scope: Scope;

  @Input()
  public get scope(): Scope {
    return this._scope;
  }

  public set scope(scope: Scope) {
    this._scope = scope;
    this.updateMagnification();
  }

  // #endregion

  @Input() public lens: Lens;

  minFocalLength = 1;
  maxFocalLength = 10;
  step = 1;
  selectedFocalLength = 3;

  calculateMagnification(): number | null {
    if (this.scope && this.eyepiece) {
      const factor = this.lens != null && this.lens.factor != null ? this.lens.factor : 1.0;
      const eyepieceFocalLength = this.eyepiece.isZoomEyepiece ? this.selectedFocalLength : this.eyepiece.focalLength;
      return Math.round((this.scope.focalLength / eyepieceFocalLength) * factor);
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
