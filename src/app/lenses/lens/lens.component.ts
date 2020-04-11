import { Component, Input } from '@angular/core';

import { Lens } from '../../shared/models/equipment/equipment';

@Component({
    selector: 'om-lens',
    templateUrl: './lens.component.html',
    styleUrls: ['./lens.component.css'],
})
export class LensComponent {
    @Input() lens: Lens;
}
