import { Component } from '@angular/core';

import { User } from '../../shared/models/user.model';
import { UserService } from '../shared/user.service';

import { EntityListComponent } from '../../shared/components/entity-list.component';

@Component({
    selector: 'om-users',
    templateUrl: './users.component.html',
    providers: [UserService]
})

export class UsersComponent extends EntityListComponent<User> {

    constructor(private userService: UserService) {
        super(userService);
    }

}
