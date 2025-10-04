import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { User } from '../../shared/models/user.model';
import { UserService } from '../shared/user.service';
import { EntityListComponent } from '../../shared/components/entity-list.component';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { AsyncPipe } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'om-users',
    templateUrl: 'users.component.html',
    imports: [
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    AsyncPipe
]
})
export class UsersComponent extends EntityListComponent<User> {

  public readonly displayedColumns = [
    'name',
    'actions',
  ];

  constructor(
    userService: UserService,
    deleteEntityDialogService: DeleteEntityDialogService,
    route: ActivatedRoute,
    router: Router,
  ) {
    super(userService, deleteEntityDialogService, route, router);
  }

}
