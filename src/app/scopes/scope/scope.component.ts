import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { Scope } from '../../shared/models/equipment/scope.model';
import { VendorSelectorComponent } from '../../equipment/vendor-selector';

@Component({
  selector: 'om-scope',
  templateUrl: 'scope.component.html',
  styleUrl: 'scope.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    VendorSelectorComponent,
  ],
})
export class ScopeComponent {

  @Input() public scope?: Scope;

}
