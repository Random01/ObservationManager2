import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { Observation } from '../../shared/models/models';
import { SeeingTypeService } from '../shared';

@Component({
    selector: 'om-observation-conditions',
    templateUrl: 'observation-conditions.component.html',
    styleUrl: 'observation-conditions.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    AsyncPipe
]
})
export class ObservationConditionsComponent {

  @Input() public observation: Observation | null = null;

  public readonly seeingTypes$ = this.seeingTypeService.getSeeingOptions();

  constructor(private readonly seeingTypeService: SeeingTypeService) { }

}
