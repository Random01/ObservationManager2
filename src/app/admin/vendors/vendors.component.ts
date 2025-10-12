import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'om-vendors',
  templateUrl: 'vendors.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class VendorsComponent {}
