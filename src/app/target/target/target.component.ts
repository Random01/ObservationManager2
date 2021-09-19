import { Component, Input } from '@angular/core';

import { Target } from '../../shared/models/target.model';

@Component({
  selector: 'om-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css'],
})
export class TargetComponent {

  @Input() target: Target;

  public onAliasAdded(alias: string) {
    this.target.alliases = [...this.target.alliases || [], alias];
  }

  public onAliasRemoved(alias: string) {
    this.target.alliases = (this.target.alliases || []).filter(x => x !== alias);
  }
}
