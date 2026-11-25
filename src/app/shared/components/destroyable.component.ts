import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';

import { Unsubscribable } from 'rxjs';

@Component({
  template: '',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class DestroyableComponent implements OnDestroy {
  private readonly subscriptions: Unsubscribable[] = [];

  public ngOnDestroy(): void {
    this.destroy();
  }

  protected handle(s: Unsubscribable) {
    this.subscriptions.push(s);
  }

  protected destroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
    this.subscriptions.splice(0);
  }
}
