import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Site } from '../../shared/models/site.model';

@Component({
  selector: 'om-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteComponent {
  @Input() public site?: Site;
}
