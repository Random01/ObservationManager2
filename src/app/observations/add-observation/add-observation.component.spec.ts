import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { firstValueFrom, of, Subject, throwError } from 'rxjs';

import { SessionService } from '../../sessions/shared/session.service';
import { Eyepiece, Filter, Lens, Scope } from '../../shared/models/equipment/equipment';
import { Observation } from '../../shared/models/observation.model';
import { SeeingType } from '../../shared/models/seeing-type.model';
import { Session } from '../../shared/models/session.model';
import { Site } from '../../shared/models/site.model';
import { Target } from '../../shared/models/target.model';
import { AddResultPayload } from '../../shared/services/add-result-payload.model';
import { MessageService } from '../../shared/services/message.service';
import { ObservationService } from '../shared/observation.service';
import { AddObservationComponent } from './add-observation.component';

describe('AddObservationComponent', () => {
  const session = new Session({
    id: 'session-1',
    site: new Site({ id: 'site-1' }),
    begin: new Date('2026-10-01T18:00:00Z'),
  });
  let component: AddObservationComponent;
  let add: jasmine.Spy<ObservationService['add']>;
  let getSession: jasmine.Spy<SessionService['getById']>;
  let messages: jasmine.SpyObj<MessageService>;

  beforeEach(() => {
    add = jasmine.createSpy('add');
    getSession = jasmine.createSpy('getById').and.returnValue(of(session));
    messages = jasmine.createSpyObj<MessageService>('MessageService', ['info', 'error']);
    TestBed.configureTestingModule({
      providers: [
        { provide: ObservationService, useValue: { add, createNew: Observation } },
        { provide: SessionService, useValue: { getById: getSession } },
        { provide: MessageService, useValue: messages },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: convertToParamMap({ sessionId: session.id }) } } },
        { provide: Router, useValue: {} },
      ],
    });
    component = TestBed.runInInjectionContext(() => new AddObservationComponent(TestBed.inject(ObservationService), TestBed.inject(SessionService)));
  });

  it('loads the session from the route and initializes the observation with its site and start time', async () => {
    await component.ngOnInit();

    const item = await firstValueFrom(component.item$);
    if (!item) {
      throw new Error('Expected the item to be initialized');
    }
    expect(getSession).toHaveBeenCalledOnceWith('session-1');
    expect(item.session).toBe(session);
    expect(item.site).toBe(session.site);
    expect(item.begin).toEqual(session.begin);
    expect(component.isLoading()).toBeFalse();
  });

  it('waits for the save and carries equipment and conditions forward to a fresh observation', async () => {
    await component.ngOnInit();
    const item = await firstValueFrom(component.item$);
    if (!item) {
      throw new Error('Expected the item to be initialized');
    }
    item.target = new Target({ name: 'M31' });
    item.result.description = 'Bright nucleus';
    item.scope = new Scope({ id: 'scope-1' });
    item.eyepiece = new Eyepiece({ id: 'eyepiece-1' });
    item.filter = new Filter({ id: 'filter-1' });
    item.lens = new Lens({ id: 'lens-1' });
    item.seeing = SeeingType.Slight;
    item.faintestStar = 5;
    item.skyQuality = 21;
    const response = new Subject<AddResultPayload>();
    add.and.returnValue(response);

    const save = component.addItemAndContinue();
    expect(add).toHaveBeenCalledOnceWith(item);
    expect(component.isLoading()).toBeTrue();
    expect(await firstValueFrom(component.item$)).toBe(item);
    response.next(new AddResultPayload());
    await save;

    const next = await firstValueFrom(component.item$);
    if (!next) {
      throw new Error('Expected the item to be initialized');
    }
    expect(next).not.toBe(item);
    expect(next).toEqual(
      jasmine.objectContaining({
        scope: item.scope,
        eyepiece: item.eyepiece,
        filter: item.filter,
        lens: item.lens,
        seeing: SeeingType.Slight,
        faintestStar: 5,
        skyQuality: 21,
        session,
      }),
    );
    expect(next.target).toEqual(jasmine.any(Target));
    expect(next.target?.name).toBeUndefined();
    expect(next.result.description).toBeUndefined();
    expect(component.isLoading()).toBeFalse();
  });

  it('keeps the current observation and reports a failed save', async () => {
    await component.ngOnInit();
    const item = await firstValueFrom(component.item$);
    if (!item) {
      throw new Error('Expected the item to be initialized');
    }
    add.and.returnValue(throwError(() => new Error('Save failed')));

    await component.addItemAndContinue();

    expect(await firstValueFrom(component.item$)).toBe(item);
    expect(messages.error).toHaveBeenCalledWith('Unable to add a new item.');
    expect(component.isLoading()).toBeFalse();
  });
});
