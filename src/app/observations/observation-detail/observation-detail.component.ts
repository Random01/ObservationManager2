import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';

import { Observation } from '../../shared/models/models';
import { ObservationService } from '../shared/observation.service';

@Component({
  selector: 'om-observation-detail',
  templateUrl: './observation-detail.component.html',
})
export class ObservationDetailComponent implements OnInit {

  observation: Observation;

  constructor(
    private readonly observationService: ObservationService,
    private readonly route: ActivatedRoute,
    private readonly location: Location,
  ) { }

  loadObservation() {
    const id = this.route.snapshot.paramMap.get('id');

    this.observationService
      .getById(id)
      .then(observation => this.observation = observation);
  }

  ngOnInit() {
    this.loadObservation();
  }

  goBack() {
    this.location.back();
  }

  update() {

  }
}
