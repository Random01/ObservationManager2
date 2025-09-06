import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Store } from '@ngrx/store';

import { map } from 'rxjs/operators';

import * as AuthApiActions from '../../store/auth/auth.actions';
import { selectAuthState } from '../../store/auth';
import { BaseComponent } from '../../shared/components';

@Component({
    selector: 'om-login',
    templateUrl: 'login.component.html',
    styleUrl: 'login.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    AsyncPipe
]
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
