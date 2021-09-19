import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Scope } from '../../shared/models/equipment/scope.model';

@Component({
  selector: 'om-scope',
  templateUrl: './scope.component.html',
  styleUrls: ['./scope.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScopeComponent {

  @Input() public scope?: Scope;

}
