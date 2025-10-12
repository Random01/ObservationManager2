import { TestBed } from '@angular/core/testing';

import { Subject, of } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';

import { RegisterEffects } from './register.effects';
import * as RegisterActions from './register.actions';

import { MessageService } from 'app/shared/services/message.service';
import { LoggingService } from 'app/shared/services/logging.service';
import { UserService } from 'app/users/shared';
import { createMock } from 'app/shared/helper-method/create-mock';
import { User } from 'app/shared/models/user.model';

describe('RegisterEffects', () => {
  let actions$: Subject<Action<string>>;
  let registerEffects: RegisterEffects;

  beforeEach(() => {
    actions$ = new Subject();

    TestBed.configureTestingModule({
      providers: [
        RegisterEffects,

        provideMockActions(() => actions$),

        { provide: MessageService, useValue: {} },
        { provide: LoggingService, useValue: {} },
        {
          provide: UserService,
          useValue: {
            // register: jasmine.createSpy('register')
            //   .and.returnValue(of(''))
          },
        },
      ],
    });

    registerEffects = TestBed.inject(RegisterEffects);
  });

  describe('register$ effect', () => {
    let userService: UserService;

    beforeEach(() => {
      userService = TestBed.inject(UserService);
      userService.register = jasmine.createSpy('register').and.returnValue(of(''));
    });

    it('should work', (done) => {
      const user = createMock<User>();

      registerEffects.register$.subscribe((result) => {
        expect(userService.register).toHaveBeenCalledWith(user);
        expect(result).toEqual(RegisterActions.registerSuccess());

        done();
      });

      actions$.next(RegisterActions.register({ user }));
    });
  });
});
