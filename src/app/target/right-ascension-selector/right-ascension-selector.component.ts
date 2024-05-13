import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { RA } from '../../shared/models/ra.model';

@Component({
  selector: 'om-right-ascension-selector',
  templateUrl: 'right-ascension-selector.component.html',
  styleUrls: ['right-ascension-selector.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightAscensionSelectorComponent {

  @Input() public ra?: RA;
  @Output() public readonly raChange = new EventEmitter<RA>();

}
