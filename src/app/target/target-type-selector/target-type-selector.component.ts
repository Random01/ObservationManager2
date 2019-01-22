import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { TargetType } from '../../shared/models/target-type.model';
import { TargetTypeService } from '../shared/target-type.service';
import { TargetTypeItem } from '../shared/interfaces/target-search-params.interface';

@Component({
    selector: 'om-target-type-selector',
    templateUrl: './target-type-selector.component.html',
    styleUrls: ['./target-type-selector.component.css']
})
export class TargetTypeSelectorComponent implements OnInit {

    @Input() targetType: TargetType;
    @Output() targetTypeChange = new EventEmitter<TargetType>();

    targetTypes: TargetTypeItem[] = [];

    constructor(
        private targetTypeService: TargetTypeService) {
    }

    ngOnInit() {
        this.targetTypeService
            .getAllTargetTypes()
            .subscribe((targetTypes) => {
                this.targetTypes = targetTypes;
            });
    }

    onChange(value: TargetType): void {
        this.targetTypeChange.emit(value);
    }

}
