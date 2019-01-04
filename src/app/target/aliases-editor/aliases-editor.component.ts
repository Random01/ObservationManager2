import { Component, Input } from '@angular/core';

@Component({
    selector: 'om-aliases-editor',
    templateUrl: './aliases-editor.component.html',
    styleUrls: ['./aliases-editor.component.css']
})
export class AliasesEditorComponent {

    @Input() aliases: string[];

    newAlias = '';

    addNewAlias(): void {
        if (this.newAlias) {
            this.aliases.push(this.newAlias);
            this.newAlias = '';
        }
    }

    removeAlias(index: number): void {
        this.aliases.splice(index, 1);
    }

}
