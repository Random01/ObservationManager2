import { Component, Input } from '@angular/core';
import { ObservingProgram } from '../../shared/models/observing-program.model';

@Component({
    selector: 'om-observing-program-statistics',
    templateUrl: './observing-program-statistics.component.html',
    styleUrls: ['./observing-program-statistics.component.css']
})
export class ObservingProgramStatisticsComponent {
    @Input() program: ObservingProgram;
}
