import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { TargetService } from '../shared/target.service';
import { Target } from '../../shared/models/models';

import { Subject, Observable } from 'rxjs';

import {
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';

import { UntypedFormControl } from '@angular/forms';
import { AddTargetDialogService } from './add-target-dialog';

@Component({
  selector: 'om-target-selector',
  templateUrl: './target-selector.component.html',
  styleUrls: [
    './target-selector.component.css',
  ],
})
export class TargetSelectorComponent implements OnInit {

  private _target: Target;

  @Input()
  public set target(target: Target) {
    if (this._target !== target) {
      this._target = target;
      this.searchControl.setValue(this._target);
    }
  }

  public get target(): Target {
    return this._target;
  }

  @Output()
  public readonly targetChange = new EventEmitter<Target>();

  public targets$: Observable<Target[]>;

  public readonly searchControl = new UntypedFormControl();

  @Input() public canAdd: boolean;

  private readonly searchTerms = new Subject<string>();

  constructor(
    private readonly targetService: TargetService,
    private readonly dialogService: AddTargetDialogService,
  ) { }

  public displayFn(target: Target): string {
    return target?.name;
  }

  public search(term: string): void {
    this.searchTerms.next(term);
  }

  public ngOnInit(): void {
    this.targets$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.targetService.search({
        name: term || '',
        maxCount: 10,
      }))
    );
  }

  public onTargetSelected(target: Target) {
    if (this.target !== target) {
      this.target = target;
      this.targetChange.emit(target);
    }
  }

  public clearSelection() {
    this.onTargetSelected(new Target());
  }

  public openDialog() {
    this.dialogService.openDialog().then(result => {
      if (result) {
        this.onTargetSelected(result);
      }
    }, () => { });
  }

}
