import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { firstValueFrom, of } from 'rxjs';

import { SessionService } from '../../sessions/shared/session.service';
import { DeleteEntityDialogService } from '../../shared/components/delete-entity-dialog/delete-entity-dialog.service';
import { Session } from '../../shared/models/session.model';
import { MessageService } from '../../shared/services/message.service';
import { ObservationService } from '../shared/observation.service';
import { SessionObservationsComponent } from './session-observations.component';

describe('SessionObservationsComponent', () => {
  const session = new Session({ id: 'session-1' });
  let component: SessionObservationsComponent;
  let observations: jasmine.SpyObj<ObservationService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    observations = jasmine.createSpyObj<ObservationService>('ObservationService', ['getItems', 'exportItems']);
    router = jasmine.createSpyObj<Router>('Router', ['navigate']);
    const params = { sessionId: session.id };
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: { params: of(params), snapshot: { paramMap: convertToParamMap(params) } } },
        { provide: Router, useValue: router },
        { provide: MessageService, useValue: { error: jasmine.createSpy('error') } },
        { provide: DeleteEntityDialogService, useValue: {} },
        { provide: SessionService, useValue: { getById: jasmine.createSpy('getById').and.returnValue(of(session)) } },
      ],
    });
    component = TestBed.runInInjectionContext(() => new SessionObservationsComponent(TestBed.inject(SessionService), observations));
  });

  it('loads the session and applies its ID to both list and export requests', async () => {
    observations.getItems.and.resolveTo({ items: [], pageCount: 0, pages: 0, totalCount: 0 });
    observations.exportItems.and.rejectWith(new Error('Export unavailable'));
    expect(await firstValueFrom(component.session$)).toBe(session);
    expect(TestBed.inject(SessionService).getById).toHaveBeenCalledOnceWith(session.id);

    await component.loadItems();
    await component.exportToTxt();

    expect(observations.getItems.calls.mostRecent().args[0].getQueryString()).toBe('page=0&size=10&session=session-1');
    expect(observations.exportItems.calls.mostRecent().args[0].getQueryString()).toContain('session=session-1');
  });

  it('navigates using the current session ID', () => {
    component.addNewObservation();
    component.backToSession();
    component.backToMySessions();

    expect(router.navigate.calls.allArgs()).toEqual([[['sessions', session.id, 'observations', 'new-observation']], [['sessions', session.id]], [['sessions']]]);
  });
});
