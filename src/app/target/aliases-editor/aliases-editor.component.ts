import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'om-aliases-editor',
  templateUrl: 'aliases-editor.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatTableModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatTooltipModule, FormsModule],
})
export class AliasesEditorComponent {
  public readonly displayedColumns: string[] = ['alias', 'actions'];

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

  @Output() public readonly aliasAdded = new EventEmitter<string>();

  @Output() public readonly aliasRemoved = new EventEmitter<string>();

  public addNewAlias(): void {
    if (this.validate()) {
      this.aliasAdded.emit(this.newAlias);
      this.newAlias = '';
      this.validate();
    }
  }

  public removeAlias(alias: string): void {
    this.aliasRemoved.emit(alias);
    this.validate();
  }

  public validate(): boolean {
    const newString = this.newAlias.trim();
    this.isValid = newString !== '' && !this.aliases?.includes(newString);
    return this.isValid;
  }
}
