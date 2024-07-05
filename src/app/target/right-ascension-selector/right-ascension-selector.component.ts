import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { RA } from '../../shared/models/ra.model';

@Component({
  selector: 'om-right-ascension-selector',
  templateUrl: 'right-ascension-selector.component.html',
  styleUrl: 'right-ascension-selector.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
})
export class RightAscensionSelectorComponent {

  @Input() public ra?: RA;
  @Output() public readonly raChange = new EventEmitter<RA>();

}
