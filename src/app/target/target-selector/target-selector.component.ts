import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component, model, effect, inject, ChangeDetectionStrategy, input } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';

import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { TargetService } from '../shared/target.service';
import { Target } from '../../shared/models/models';
import { AddTargetDialogService } from './add-target-dialog';

function isTarget(item: string | Target): item is Target {
  return item instanceof Target;
}

@Component({
  selector: 'om-target-selector',
  templateUrl: 'target-selector.component.html',
  styleUrl: 'target-selector.component.less',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatAutocompleteModule, ReactiveFormsModule, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TargetSelectorComponent {
  readonly target = model<Target>();
  readonly canAdd = input(false);

  public targets$: Observable<Target[]>;

  public readonly searchControl = new FormControl<Target>(null);

  private readonly searchTerms$ = new Subject<string>();

  private readonly targetService = inject(TargetService);
  private readonly dialogService = inject(AddTargetDialogService);

  constructor() {
    this.targets$ = this.searchTerms$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) =>
        this.targetService.search({
          name: term || '',
          maxCount: 10,
        }),
      ),
    );
    
    effect(() => {
      this.searchControl.setValue(this.target());
    });
  }

  public displayFn(target: Target): string {
    return target?.name;
  }

  public search(term: string | Target): void {
    this.searchTerms$.next(isTarget(term) ? term.name : term);
  }

  public onTargetSelected(target: Target) {
    if (this.target() !== target) {
      this.target.set(target);
    }
  }

  public clearSelection() {
    this.onTargetSelected(new Target());
  }

  public openDialog() {
    this.dialogService.openDialog().then((result) => {
      if (result) {
        this.onTargetSelected(result);
      }
    });
  }
}
