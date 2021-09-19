import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Degrees } from '../../models/degrees.model';

@Component({
  selector: 'om-degrees-input',
  templateUrl: './degrees-input.component.html',
  styleUrls: ['./degrees-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DegreesInputComponent {

  @Input() public degrees: Degrees | null = null;
  @Output() public readonly degreesChange = new EventEmitter<Degrees>();

}
