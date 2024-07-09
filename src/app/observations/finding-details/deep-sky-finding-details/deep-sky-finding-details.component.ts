import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { DeepSkyFindingDetails } from '../../../shared/models/finding-details/deep-sky-finding-details.model';

@Component({
  selector: 'om-deep-sky-finding-details',
  templateUrl: 'deep-sky-finding-details.component.html',
  styleUrl: 'deep-sky-finding-details.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeepSkyFindingDetailsComponent {
  @Input() public findingDetails: DeepSkyFindingDetails | null = null;
}
