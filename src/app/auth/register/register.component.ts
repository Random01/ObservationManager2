import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { Store } from '@ngrx/store';

import { map } from 'rxjs/operators';

import * as RegisterActions from '../../store/register/register.actions';
import { User } from '../../shared/models/user.model';
import { BaseComponent } from '../../shared/components/base-component';
import { selectRegisterState } from '../../store/register';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'om-register',
  templateUrl: 'register.component.html',
  styleUrl: 'register.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, AsyncPipe],
})
export class RegisterComponent extends BaseComponent implements OnInit {

  public readonly profileForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  private readonly store = inject(Store);

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

  public ngOnInit(): void {
    this.store.select(selectRegisterState).pipe(map((state) => state.isWorking), takeUntilDestroyed(this.destroyRef)).subscribe(isWorking => {
      this.isLoadingSubject.next(isWorking);
    });
  }
}