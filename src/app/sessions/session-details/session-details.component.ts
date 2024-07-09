import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { finalize, firstValueFrom } from 'rxjs';

import { Session } from '../../shared/models/session.model';
import { SessionService } from '../shared/session.service';
import { ObservationDialogComponent } from '../../observations/observation-dialog/observation-dialog.component';
import { Observation } from '../../shared/models/observation.model';
import { Target } from '../../shared/models/models';
import { BaseComponent } from '../../shared/components/base-component';
import { ObservationService } from '../../observations/shared/observation.service';
import { Eyepiece, Scope, Filter } from '../../shared/models/equipment/equipment';
import { SessionComponent } from "../session/session.component";

@Component({
  selector: 'om-session-details',
  templateUrl: 'session-details.component.html',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterLink,
    SessionComponent,
  ],
})
export class SessionDetailsComponent extends BaseComponent implements OnInit {

  public session: Session | null = null;

  public editMode = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly sessionService: SessionService,
    private readonly dialog: MatDialog,
    private readonly observationService: ObservationService,
  ) {
    super();
  }

  public create(): void {
    this.startLoading();

    this.handle(
      this.sessionService.add(this.session)
        .pipe(finalize(() => this.endLoading()))
        .subscribe()
    );
  }

  public update(): void {
    this.startLoading();

    this.handle(
      this.sessionService.update(this.session)
        .pipe(finalize(() => this.endLoading()))
        .subscribe()
    );
  }

  public loadSession(): void {
    const sessionId = this.route.snapshot.paramMap.get('id');
    this.editMode = !!sessionId;
    if (sessionId) {
      this.startLoading();

      this.handle(
        this.sessionService.getById(sessionId)
          .pipe(finalize(() => this.endLoading()))
          .subscribe(session => {
            this.session = session;
          })
      );
    } else {
      this.session = new Session();
    }
  }

  public ngOnInit(): void {
    this.loadSession();
  }

  public async addNewObservation() {
    const dialogRef = this.dialog.open(ObservationDialogComponent, {
      width: '400px',
      data: new Observation({
        session: this.session,
        target: new Target(),
        scope: new Scope(),
        filter: new Filter(),
        eyepiece: new Eyepiece(),
      })
    });

    // todo: use Observable here instead of toPromise
    const result = await dialogRef.afterClosed().toPromise();
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
