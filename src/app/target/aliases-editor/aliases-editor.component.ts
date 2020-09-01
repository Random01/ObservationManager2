import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'om-aliases-editor',
    templateUrl: './aliases-editor.component.html',
    styleUrls: ['./aliases-editor.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AliasesEditorComponent {

    private _aliases: string[];

    @Input() public set aliases(value: string[]) {
        if (this._aliases !== value) {
            this._aliases = value;
            this.validate();
        }
    }

    public get aliases() {
        return this._aliases;
    }

    public newAlias = '';

    public isValid = false;

    @Output() aliasAdded = new EventEmitter<string>();

    @Output() aliasRemoved = new EventEmitter<string>();

    public addNewAlias(): void {
        if (this.validate()) {
            this.aliasAdded.emit(this.newAlias);
            this.newAlias = '';
            this.validate();
        }
    }

    public removeAlias(alias: string): void {
        this.aliasRemoved.emit(alias)
        this.validate();
    }

    public validate(): boolean {
        const newString = this.newAlias.trim();
        this.isValid = newString !== '' && !this.aliases?.includes(newString);
        return this.isValid;
    }

}
