import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { map, switchMap } from 'rxjs';

import { Observation } from '../../shared/models/models';
import { ObservationService } from '../shared/observation.service';

@Component({
  selector: 'om-observation-detail',
  templateUrl: 'observation-detail.component.html',
})
export class ObservationDetailComponent implements OnInit {

  public observation: Observation;

  constructor(
    private readonly observationService: ObservationService,
    private readonly route: ActivatedRoute,
    private readonly location: Location,
  ) { }

  public ngOnInit(): void {
    this.route.params.pipe(
      map(params => params['id']),
      switchMap(observationId => this.observationService.getById(observationId)),
    ).subscribe(observation => {
      this.observation = observation;
    });
  }

  public goBack(): void {
    this.location.back();
  }

  public update(): void {

  }

}
