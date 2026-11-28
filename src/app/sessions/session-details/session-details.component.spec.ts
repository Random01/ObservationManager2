import { Component, input } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, convertToParamMap, RouterLink } from '@angular/router';
import { of, Subject } from 'rxjs';

import { ObservationDialogComponent } from '../../observations/observation-dialog/observation-dialog.component';
import { ObservationService } from '../../observations/shared/observation.service';
import { Observation } from '../../shared/models/observation.model';
import { Session } from '../../shared/models/session.model';
import { AddResultPayload } from '../../shared/services/add-result-payload.model';
import { MessageService } from '../../shared/services/message.service';
import { SessionComponent } from '../session/session.component';
import { SessionService } from '../shared/session.service';
import { SessionDetailsComponent } from './session-details.component';

@Component({ selector: 'om-session', template: '{{ session().id }}' })
class SessionEditorStub {
  readonly session = input.required<Session>();
}

describe('SessionDetailsComponent', () => {
  const session = new Session({ id: 'session-1' });
  let component: SessionDetailsComponent;
  let sessions: jasmine.SpyObj<SessionService>;
  let observations: jasmine.SpyObj<ObservationService>;
  let dialog: jasmine.SpyObj<MatDialog>;
  let closed: Subject<Observation | undefined>;

  function createRoute(id?: string): ActivatedRoute {
    const route = new ActivatedRoute();
    route.snapshot = { paramMap: convertToParamMap(id ? { id } : {}) } as ActivatedRoute['snapshot'];
    return route;
  }

  function initialize(id?: string) {
    component = TestBed.runInInjectionContext(() => new SessionDetailsComponent(createRoute(id), sessions, dialog, observations));
    component.ngOnInit();
  }

  beforeEach(() => {
    sessions = jasmine.createSpyObj<SessionService>('SessionService', ['add', 'update', 'getById']);
    sessions.getById.and.returnValue(of(session));
    sessions.add.and.returnValue(of(new AddResultPayload()));
    sessions.update.and.returnValue(of(true));
    observations = jasmine.createSpyObj<ObservationService>('ObservationService', ['add']);
    observations.add.and.returnValue(of(new AddResultPayload()));
    dialog = jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);
    closed = new Subject();
    dialog.open.and.returnValue(jasmine.createSpyObj('MatDialogRef', { afterClosed: closed }));
    TestBed.configureTestingModule({ providers: [{ provide: MessageService, useValue: {} }] });
  });

  it('creates a blank session when the route has no ID', () => {
    initialize();
    expect(component.editMode).toBeFalse();
    expect(sessions.getById).not.toHaveBeenCalled();

    component.create();
    expect(sessions.add).toHaveBeenCalledOnceWith(component.session());
    expect(component.isLoading()).toBeFalse();
  });

  it('loads an existing session and sends it for update', () => {
    initialize(session.id);
    expect(component.editMode).toBeTrue();
    expect(sessions.getById).toHaveBeenCalledOnceWith(session.id);
    expect(component.session()).toBe(session);

    component.update();
    expect(sessions.update).toHaveBeenCalledOnceWith(session);
    expect(component.isLoading()).toBeFalse();
  });

  it('renders the session editor when the existing session arrives', async () => {
    const response = new Subject<Session>();
    sessions.getById.and.returnValue(response);
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: createRoute(session.id) },
        { provide: SessionService, useValue: sessions },
        { provide: ObservationService, useValue: observations },
        { provide: MatDialog, useValue: dialog },
      ],
    }).overrideComponent(SessionDetailsComponent, {
      remove: { imports: [RouterLink, SessionComponent] },
      add: { imports: [SessionEditorStub] },
    });
    const fixture = TestBed.createComponent(SessionDetailsComponent);
    const element: HTMLElement = fixture.nativeElement;
    fixture.autoDetectChanges();
    expect(element.querySelector('om-session')).toBeNull();

    response.next(session);
    response.complete();
    await fixture.whenStable();

    expect(element.querySelector('om-session')?.textContent).toContain(session.id!);
  });

  it('opens an observation for the current session and saves a confirmed result', async () => {
    initialize(session.id);
    const result = new Observation({ session });
    const pending = component.addNewObservation();
    expect(dialog.open).toHaveBeenCalledOnceWith(ObservationDialogComponent, jasmine.objectContaining({ data: jasmine.objectContaining({ session }) }));
    closed.next(result);
    await pending;

    expect(observations.add).toHaveBeenCalledOnceWith(result);
    expect(component.isLoading()).toBeFalse();
  });

  it('does not save a cancelled observation', async () => {
    initialize(session.id);
    const pending = component.addNewObservation();
    closed.next(undefined);
    await pending;
    expect(observations.add).not.toHaveBeenCalled();
  });
});
