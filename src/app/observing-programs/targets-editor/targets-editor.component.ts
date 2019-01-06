import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Target } from '../../shared/models/models';

@Component({
    selector: 'om-targets-editor',
    templateUrl: './targets-editor.component.html',
    styleUrls: ['./targets-editor.component.css']
})

export class TargetsEditorComponent {

    @Input() targets: Target[];
    @Output() targetsChange: EventEmitter<Target[]> = new EventEmitter();

    displayedColumns: string[] = [
        'name',
        'actions'
    ];

    newTarget: Target;

    addNewTarget(): void {
        if (this.newTarget) {
            this.targets = [...this.targets, this.newTarget];
            this.newTarget = null;
            this.targetsChange.emit(this.targets);
        }
    }

    removeTarget(target: Target): void {
        const index = this.targets.indexOf(target);
        this.targets.splice(index, 1);
        this.targets = [...this.targets];
        this.targetsChange.emit(this.targets);
    }

}
