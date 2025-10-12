import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Degrees } from '../../models/degrees.model';

@Component({
  selector: 'om-degrees-input',
  templateUrl: 'degrees-input.component.html',
  styleUrl: 'degrees-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, MatInputModule, FormsModule],
})
export class DegreesInputComponent {
  @Input() public title: string | null = null;
  @Input() public degrees: Degrees | null = null;
  @Output() public readonly degreesChange = new EventEmitter<Degrees>();
}
