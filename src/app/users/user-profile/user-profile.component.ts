import { Component } from '@angular/core';

import { User } from '../../shared/models/user.model';

@Component({
  selector: 'om-user-profile',
  templateUrl: 'user-profile.component.html',
})
export class UserProfileComponent {

  public user?: User;

}
