import { Component, OnInit, Input } from '@angular/core';

import { TargetService } from '../shared/target.service';
import { Target } from '../../shared/models/models';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import {
    debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'om-target-selector',
    templateUrl: './target-selector.component.html',
    providers: [
        TargetService
    ]
})
export class TargetSelectorComponent implements OnInit {

    @Input() target: Target;

    targets$: Observable<Target[]>;

    searhControl: FormControl = new FormControl();

    private searchTerms = new Subject<string>();

    constructor(private targetService: TargetService) {
    }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.targets$ = this.searchTerms.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((term: string) => this.targetService.search({
                name: term,
                maxCount: 10
            }))
        );
    }

}
