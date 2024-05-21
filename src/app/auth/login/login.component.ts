import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';

import { map } from 'rxjs/operators';

import * as AuthApiActions from '../../store/auth/auth.actions';
import { BaseComponent } from '../../shared/components';

import { selectAuthState } from 'app/store/auth';


@Component({
  selector: 'om-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent extends BaseComponent {

  public override readonly isLoading$ = this.store.select(selectAuthState)
    .pipe(map(state => state.isWorking));

  public readonly loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private readonly store: Store,
  ) {
    super();
  }

  public onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.store.dispatch(AuthApiActions.login({ credentials: { email, password } }));
    }
  }

}
