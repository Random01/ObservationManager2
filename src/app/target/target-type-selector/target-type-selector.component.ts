import { Component, ChangeDetectionStrategy, model, inject } from '@angular/core';
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
  readonly targetType = model<TargetType>();
  readonly targetTypes$ = inject(TargetTypeService).getAllTargetTypes();

  onChange(value: TargetType): void {
    this.targetType.set(value);
  }
}
