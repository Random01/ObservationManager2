import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Target } from '../../shared/models/target.model';
import { AliasesEditorComponent } from '../aliases-editor/aliases-editor.component';
import { RightAscensionSelectorComponent } from '../right-ascension-selector';
import { ConstellationSelectorComponent } from "../constellation-selector/constellation-selector.component";
import { DeclinationSelectorComponent } from "../declination-selector/declination-selector.component";
import { TargetTypeSelectorComponent } from "../target-type-selector/target-type-selector.component";

@Component({
  selector: 'om-target',
  templateUrl: 'target.component.html',
  styleUrl: 'target.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    AliasesEditorComponent,
    RightAscensionSelectorComponent,
    ConstellationSelectorComponent,
    DeclinationSelectorComponent,
    TargetTypeSelectorComponent,
  ],
})
export class TargetComponent {

  @Input() public target?: Target;

  public onAliasAdded(alias: string) {
    this.target.alliases = [...this.target.alliases || [], alias];
  }

  public onAliasRemoved(alias: string) {
    this.target.alliases = (this.target.alliases || [])
      .filter(x => x !== alias);
  }
}
