import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';

import { Dec } from '../../shared/models/dec.model';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'om-declination-selector',
  templateUrl: 'declination-selector.component.html',
  styleUrl: 'declination-selector.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
})
export class DeclinationSelectorComponent {

  @Input() public dec?: Dec;
  @Output() public readonly decChange = new EventEmitter<Dec>();

}
