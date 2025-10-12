import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { Store } from '@ngrx/store';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { selectAuthState } from '../../store/auth';
import * as AuthApiActions from '../../store/auth/auth.actions';

@Component({
  selector: 'om-user-profile-menu',
  templateUrl: 'user-profile-menu.component.html',
  styleUrl: 'user-profile-menu.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatMenuModule, MatIconModule, RouterLink, AsyncPipe],
})
export class UserProfileMenuComponent {
  public readonly authState$ = this.store.select(selectAuthState);

  constructor(
    private readonly router: Router,
    private readonly store: Store,
  ) {}

  public logOut() {
    this.store.dispatch(AuthApiActions.logout());
  }

  public editProfile() {
    this.router.navigate(['/users/profile']);
  }
}
