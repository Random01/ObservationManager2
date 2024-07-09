import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { Eyepiece } from '../../shared/models/equipment/eyepiece.model';
import { VendorSelectorComponent } from '../../equipment/vendor-selector';

@Component({
  selector: 'om-eyepiece',
  templateUrl: 'eyepiece.component.html',
  styleUrl: 'eyepiece.component.less',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    VendorSelectorComponent,
    NgIf,
  ],
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
