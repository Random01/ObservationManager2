import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ObservingProgram } from '../../shared/models/observing-program.model';
import { TargetsEditorComponent } from '../targets-editor/targets-editor.component';

@Component({
  selector: 'om-observing-program',
  templateUrl: 'observing-program.component.html',
  styleUrl: 'observing-program.component.less',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, TargetsEditorComponent],
})
export class ObservingProgramComponent {
  @Input() program?: ObservingProgram;
}
