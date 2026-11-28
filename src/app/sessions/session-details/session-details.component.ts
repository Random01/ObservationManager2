import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { finalize, firstValueFrom } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DestroyRef, inject } from '@angular/core';

import { Session } from '../../shared/models/session.model';
import { SessionService } from '../shared/session.service';
import { ObservationDialogComponent } from '../../observations/observation-dialog/observation-dialog.component';
import { Observation } from '../../shared/models/observation.model';
import { Target } from '../../shared/models/models';
import { BaseComponent } from '../../shared/components/base-component';
import { ObservationService } from '../../observations/shared/observation.service';
import { Eyepiece, Scope, Filter } from '../../shared/models/equipment/equipment';
import { SessionComponent } from '../session/session.component';

@Component({
  selector: 'om-session-details',
  templateUrl: 'session-details.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [MatButtonModule, RouterLink, SessionComponent],
})
export class SessionDetailsComponent extends BaseComponent implements OnInit {
  public session: Session | null = null;

  public editMode = false;

  protected readonly destroyRef = inject(DestroyRef);
  constructor(
    private readonly route: ActivatedRoute,
    private readonly sessionService: SessionService,
    private readonly dialog: MatDialog,
    private readonly observationService: ObservationService,
  ) {
    super();
  }

  public create(): void {
    if (!this.session) {
      return;
    }
    this.startLoading();

    this.sessionService
      .add(this.session)
      .pipe(finalize(() => this.endLoading()), takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }

  public update(): void {
    if (!this.session) {
      return;
    }
    this.startLoading();

    this.sessionService
      .update(this.session)
      .pipe(finalize(() => this.endLoading()), takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }

  public loadSession(): void {
    const sessionId = this.route.snapshot.paramMap.get('id');
    this.editMode = !!sessionId;
    if (sessionId) {
      this.startLoading();

      this.sessionService
        .getById(sessionId)
        .pipe(finalize(() => this.endLoading()), takeUntilDestroyed(this.destroyRef))
        .subscribe((session) => {
          this.session = session;
        });
    } else {
      this.session = new Session();
    }
  }

  public ngOnInit(): void {
    this.loadSession();
  }

  public async addNewObservation() {
    if (!this.session) {
      return;
    }
    const dialogRef = this.dialog.open(ObservationDialogComponent, {
      width: '400px',
      data: new Observation({
        session: this.session,
        target: new Target(),
        scope: new Scope(),
        filter: new Filter(),
        eyepiece: new Eyepiece(),
      }),
    });

    const result = await firstValueFrom(dialogRef.afterClosed());
    if (result) {
      this.startLoading();
      try {
        await firstValueFrom(this.observationService.add(result));
      } finally {
        this.endLoading();
      }
    }
  }
}
