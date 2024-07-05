import { ChangeDetectionStrategy, Component } from '@angular/core';

import { User } from '../../shared/models/user.model';

@Component({
  selector: 'om-user-profile',
  templateUrl: 'user-profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class UserProfileComponent {

  public user?: User;

}
