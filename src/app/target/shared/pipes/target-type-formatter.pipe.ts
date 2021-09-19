import { Pipe, PipeTransform } from '@angular/core';

import { TargetType } from '../../../shared/models/target-type.model';
import { TargetTypeService } from '../target-type.service';

@Pipe({ name: 'targetTypeFormatter' })
export class TargetTypeFormatterPipe implements PipeTransform {

  constructor(
    public readonly targetTypeService: TargetTypeService,
  ) { }

  public transform(targetType?: TargetType): string {
    if (targetType == null) {
      return '';
    }

    return this.targetTypeService.getName(targetType);
  }

}
