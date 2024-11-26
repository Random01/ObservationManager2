import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { Observation } from '../../shared/models/models';
import { TargetSelectorComponent } from "../../target/target-selector/target-selector.component";
import { SessionInfoComponent } from "../../sessions/session-info/session-info.component";
import { DateTimeInputComponent } from "../../shared/components/date-time-input/date-time-input.component";
import { ScopeSelectorComponent } from "../../scopes/scope-selector/scope-selector.component";
import { EyepieceSelectorComponent } from "../../eyepieces/eyepiece-selector/eyepiece-selector.component";
import { MagnificationSelectorComponent } from "../magnification-selector/magnification-selector.component";
import { FilterSelectorComponent } from "../../filters/filter-selector/filter-selector.component";
import { LensSelectorComponent } from "../../lenses/lens-selector/lens-selector.component";
import { ObservationConditionsComponent } from "../observation-conditions/observation-conditions.component";


@Component({
    selector: 'om-observation',
    templateUrl: 'observation.component.html',
    styleUrl: 'observation.component.less',
    imports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        TargetSelectorComponent,
        SessionInfoComponent,
        DateTimeInputComponent,
        ScopeSelectorComponent,
        EyepieceSelectorComponent,
        MagnificationSelectorComponent,
        FilterSelectorComponent,
        LensSelectorComponent,
        ObservationConditionsComponent,
    ]
})
export class ObservationComponent {

  @Input() public observation: Observation | null = null;

}
