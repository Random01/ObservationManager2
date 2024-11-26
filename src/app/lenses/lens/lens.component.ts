import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Lens } from '../../shared/models/equipment/equipment';
import { VendorSelectorComponent } from 'app/equipment/vendor-selector';

@Component({
    selector: 'om-lens',
    templateUrl: 'lens.component.html',
    styleUrl: 'lens.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatFormFieldModule,
        MatInputModule,
        VendorSelectorComponent,
        FormsModule,
    ]
})
export class LensComponent {
  @Input() public lens?: Lens;
}
