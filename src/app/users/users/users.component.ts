import { Component } from '@angular/core';

import { User } from '../../shared/models/user.model';
import { UserService } from '../shared/user.service';

import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';

@Component({
    selector: 'om-users',
    templateUrl: './users.component.html'
})

export class UsersComponent extends EntityListComponent<User> {

    constructor(
        protected userService: UserService,
        protected deleteEntityDialogService: DeleteEntityDialogService) {
        super(userService, deleteEntityDialogService);
    }

}
