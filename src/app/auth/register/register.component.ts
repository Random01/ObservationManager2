import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { map } from 'rxjs/operators';

import * as RegisterActions from '../../store/register/register.actions';
import { User } from '../../shared/models/user.model';
import { BaseComponent } from '../../shared/components/base-component';
import { AppContextService } from '../../shared/services/app-context.service';

import { selectRegisterState } from 'app/store/register';

@Component({
  selector: 'om-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    appContext: AppContextService,
  ) {
    super(appContext);
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
