import { Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { AddEntityComponent } from '../../shared/components/add-entity.component';
import { User } from '../../shared/models/user.model';
import { UserService } from '../shared/user.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'om-add-user',
  templateUrl: 'add-user.component.html',
  standalone: true,
  imports: [MatButtonModule, NgIf, AsyncPipe, UserComponent],
})
export class AddUserComponent extends AddEntityComponent<User> {
  constructor(service: UserService) {
    super(service);
  }
}
