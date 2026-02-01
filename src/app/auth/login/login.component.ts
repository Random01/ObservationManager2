import { Component, ChangeDetectionStrategy, inject, OnInit, DestroyRef } from '@angular/core';
import { Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
})
export class LoginComponent extends BaseComponent implements OnInit {

  public readonly loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  private readonly store = inject(Store);
  private readonly destroyRef = inject(DestroyRef);

  public onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.store.dispatch(AuthApiActions.login({ credentials: { email, password } }));
    }
  }

  public ngOnInit(): void {
    this.store.select(selectAuthState).pipe(map((state) => state.isWorking), takeUntilDestroyed(this.destroyRef)).subscribe(isWorking => {
      this.isLoading.set(isWorking);
    });
  }
}
