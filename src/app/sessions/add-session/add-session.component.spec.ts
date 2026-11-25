import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom, of, throwError } from 'rxjs';

import { Session } from '../../shared/models/session.model';
import { AddResultPayload } from '../../shared/services/add-result-payload.model';
import { MessageService } from '../../shared/services/message.service';
import { ResponseStatus } from '../../shared/services/response-status.model';
import { SessionService } from '../shared/session.service';
import { AddSessionComponent } from './add-session.component';

describe('AddSessionComponent', () => {
  let component: AddSessionComponent;
  let add: jasmine.Spy<SessionService['add']>;
  let router: jasmine.SpyObj<Router>;
  let messages: jasmine.SpyObj<MessageService>;

  beforeEach(async () => {
    add = jasmine.createSpy('add');
    router = jasmine.createSpyObj<Router>('Router', ['navigate']);
    messages = jasmine.createSpyObj<MessageService>('MessageService', ['error']);
    TestBed.configureTestingModule({
      providers: [
        { provide: SessionService, useValue: { createNew: Session, add } },
        { provide: ActivatedRoute, useValue: {} },
        { provide: Router, useValue: router },
        { provide: MessageService, useValue: messages },
      ],
    });
    component = TestBed.runInInjectionContext(() => new AddSessionComponent(TestBed.inject(SessionService)));
    await component.ngOnInit();
  });

  it('opens a new observation using the ID assigned to the saved session', async () => {
    const saved = new Session({ id: 'session-1' });
    add.and.returnValue(of(new AddResultPayload({ status: ResponseStatus.Ok, payload: saved })));

    await component.addAndGo();

    expect(add).toHaveBeenCalledOnceWith(await firstValueFrom(component.item$));
    expect(router.navigate).toHaveBeenCalledOnceWith(['/sessions/session-1/observations/new-observation']);
  });

  it('reports a failed save and stays on the editor', async () => {
    add.and.returnValue(throwError(() => new Error('Save failed')));

    await component.addAndGo();

    expect(messages.error).toHaveBeenCalledWith('Unable to add a new item.');
    expect(router.navigate).not.toHaveBeenCalled();
    expect(component.isLoading()).toBeFalse();
  });
});
