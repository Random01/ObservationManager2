import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { Store } from '@ngrx/store';

import { map } from 'rxjs/operators';

import * as RegisterActions from '../../store/register/register.actions';
import { User } from '../../shared/models/user.model';
import { BaseComponent } from '../../shared/components/base-component';
import { selectRegisterState } from '../../store/register';

@Component({
  selector: 'om-register',
  templateUrl: 'register.component.html',
  styleUrl: 'register.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgIf,
    AsyncPipe,
  ],
})
export class RegisterComponent extends BaseComponent {

  public override readonly isLoading$ = this.store.select(selectRegisterState)
    .pipe(map(state => state.isWorking));

  public readonly profileForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private readonly store: Store,
    private readonly router: Router,
  ) {
    super();
  }

  public onSubmit() {
    if (this.profileForm.valid) {
      const { userName, email, password } = this.profileForm.value;
      const user = new User({ email, userName, password });
      this.store.dispatch(RegisterActions.register({ user }));
    }
  }

  public goBack() {
    this.router.navigate(['/login']);
  }
}
