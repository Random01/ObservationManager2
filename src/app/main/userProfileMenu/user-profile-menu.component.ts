import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { selectAuthState } from '../../store/auth';
import * as AuthApiActions from '../../store/auth/auth.actions';

@Component({
  selector: 'om-user-profile-menu',
  templateUrl: './user-profile-menu.component.html',
  styleUrls: ['./user-profile-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileMenuComponent {

  public readonly authState$ = this.store.select(selectAuthState);

  constructor(
    private readonly router: Router,
    private readonly store: Store,
  ) { }

  public logOut() {
    this.store.dispatch(AuthApiActions.logout());
  }

  public editProfile() {
    this.router.navigate(['/users/profile']);
  }

}
