import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { TargetType } from '../../shared/models/target-type.model';
import { TargetTypeService } from '../shared/target-type.service';

@Component({
  selector: 'om-target-type-selector',
  templateUrl: 'target-type-selector.component.html',
  styleUrl: 'target-type-selector.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, MatSelectModule, AsyncPipe],
})
export class TargetTypeSelectorComponent {
  @Input() public targetType?: TargetType;

  @Output() public readonly targetTypeChange = new EventEmitter<TargetType>();

  public readonly targetTypes$ = this.targetTypeService.getAllTargetTypes();

  constructor(private readonly targetTypeService: TargetTypeService) {}

  public onChange(value: TargetType): void {
    this.targetTypeChange.emit(value);
  }
}
