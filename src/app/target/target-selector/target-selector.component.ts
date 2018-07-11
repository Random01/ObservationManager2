import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { TargetService } from '../shared/target.service';
import { Target } from '../../shared/models/models';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import {
    debounceTime,
    distinctUntilChanged,
    switchMap
} from 'rxjs/operators';

import { FormControl } from '@angular/forms';
import { MatOption } from '@angular/material';

@Component({
    selector: 'om-target-selector',
    templateUrl: './target-selector.component.html',
    providers: [
        TargetService
    ]
})
export class TargetSelectorComponent implements OnInit {

    @Input() target: Target;
    @Output() targetSelected: EventEmitter<Target> = new EventEmitter();

    targets$: Observable<Target[]>;

    searhControl: FormControl = new FormControl();

    private searchTerms = new Subject<string>();

    constructor(private targetService: TargetService) {
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
            this.targetSelected.emit(target);

            this.searhControl.setValue(null);
        }
    }

}
