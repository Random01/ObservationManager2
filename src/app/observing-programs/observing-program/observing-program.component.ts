import { Component, Input } from '@angular/core';
import { ObservingProgram } from '../../shared/models/observing-program.model';

@Component({
    selector: 'om-observing-program',
    templateUrl: './observing-program.component.html',
    styleUrls: ['./observing-program.component.css']
})
export class ObservingProgramComponent {
    @Input() program: ObservingProgram;
}
