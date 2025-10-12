import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'om-page-not-found',
  templateUrl: 'page-not-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PageNotFoundComponent {}
