import { Component, Input } from '@angular/core';

import { Eyepiece } from '../../shared/models/equipment/eyepiece.model';

@Component({
  selector: 'om-eyepiece',
  templateUrl: 'eyepiece.component.html',
  styleUrls: ['eyepiece.component.less'],
})
export class EyepieceComponent {

  private _eyepiece: Eyepiece;

  @Input() public set eyepiece(eyepiece: Eyepiece) {
    this._eyepiece = eyepiece;
    this.isZoomEyepiece = eyepiece.isZoomEyepiece;
  }

  public get eyepiece(): Eyepiece {
    return this._eyepiece;
  }

  public isZoomEyepiece = false;

}
