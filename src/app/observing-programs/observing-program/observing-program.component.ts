import { Component, Input } from '@angular/core';

import { ObservingProgram } from '../../shared/models/observing-program.model';
import { TargetsEditorComponent } from '../targets-editor/targets-editor.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'om-observing-program',
  templateUrl: 'observing-program.component.html',
  styleUrls: ['observing-program.component.less'],
  standalone: true,
  imports: [
    TargetsEditorComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
})
export class ObservingProgramComponent {
  @Input() program?: ObservingProgram;
}
