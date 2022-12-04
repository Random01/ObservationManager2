import { Component, Input } from '@angular/core';

import { Observation } from '../../shared/models/models';
import { SeeingTypeService } from '../shared';

@Component({
  selector: 'om-observation-conditions',
  templateUrl: './observation-conditions.component.html',
  styleUrls: ['./observation-conditions.component.less'],
})
export class ObservationConditionsComponent {

  @Input() public observation: Observation | null = null;

  public readonly seeingTypes$ = this.seeingTypeService.getSeeingOptions();

  constructor(private readonly seeingTypeService: SeeingTypeService) { }

}
