import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Session } from '../../shared/models/models';
import { DateTimeInputComponent } from '../../shared/components/date-time-input';
import { SiteSelectorComponent } from "../../sites/site-selector/site-selector.component";

@Component({
  selector: 'om-session',
  templateUrl: 'session.component.html',
  styleUrl: 'session.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    DateTimeInputComponent,
    SiteSelectorComponent,
  ],
})
export class SessionComponent {
  @Input() session?: Session;
}
