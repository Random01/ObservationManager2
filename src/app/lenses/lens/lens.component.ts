import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Lens } from '../../shared/models/equipment/equipment';

@Component({
  selector: 'om-lens',
  templateUrl: 'lens.component.html',
  styleUrls: ['lens.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LensComponent {
  @Input() public lens?: Lens;
}
