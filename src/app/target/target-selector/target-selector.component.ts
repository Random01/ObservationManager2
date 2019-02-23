import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { TargetService } from '../shared/target.service';
import { Target } from '../../shared/models/models';

import { Subject, Observable } from 'rxjs';

import {
    debounceTime,
    distinctUntilChanged,
    switchMap
} from 'rxjs/operators';

import { FormControl } from '@angular/forms';
import { AddTargetDialogService } from './add-target-dialog';

@Component({
    selector: 'om-target-selector',
    templateUrl: './target-selector.component.html',
    styleUrls: [
        './target-selector.component.css'
    ]
})
export class TargetSelectorComponent implements OnInit {

    private _target: Target;

    @Input()
    set target(target: Target) {
        if (this._target !== target) {
            this._target = target;
            this.searhControl.setValue(this._target);
        }
    }

    get target(): Target {
        return this._target;
    }

    @Output()
    targetChange: EventEmitter<Target> = new EventEmitter();

    targets$: Observable<Target[]>;

    searhControl: FormControl = new FormControl();

    private searchTerms = new Subject<string>();

    constructor(
        private targetService: TargetService,
        private dialogService: AddTargetDialogService) {
    }

    displayFn(target?: Target): string | undefined {
        return target ? target.name : undefined;
    }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.targets$ = this.searchTerms.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((term: string) => this.targetService.search({
                name: term || '',
                maxCount: 10
            }))
        );
    }

    onTargetSelected(target?: Target) {
        if (this.target !== target) {
            this.target = target;
            this.targetChange.emit(target);
        }
    }

    clearSelection() {
        this.onTargetSelected(new Target());
    }

    openDialog() {
        this.dialogService.openDialog().then((result) => {
            if (result) {
                this.onTargetSelected(result);
            }
        });
    }

}
