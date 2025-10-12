import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Site } from '../../shared/models/site.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { DegreesInputComponent } from 'app/shared/components/degrees-input';

@Component({
  selector: 'om-site',
  templateUrl: 'site.component.html',
  styleUrl: 'site.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, DegreesInputComponent],
})
export class SiteComponent {
  @Input() public site?: Site;
}
