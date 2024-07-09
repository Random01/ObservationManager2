import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { User } from '../../shared/models/user.model';

@Component({
  selector: 'om-user',
  templateUrl: 'user.component.html',
  styleUrl: 'user.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
})
export class UserComponent {
  @Input({ required: true }) user?: User;
}
