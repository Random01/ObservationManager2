﻿import { Component, Input } from '@angular/core';

import { Observation } from '../../shared/models/models';

@Component({
  selector: 'om-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.less'],
})
export class ObservationComponent {

  @Input() public observation: Observation | null = null;

}
