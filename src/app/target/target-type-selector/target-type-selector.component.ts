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

  @Input() public targetType: TargetType;

  @Output() public readonly targetTypeChange = new EventEmitter<TargetType>();

  public targetTypes: TargetTypeItem[] = [];

  constructor(
    private readonly targetTypeService: TargetTypeService,
  ) { }

  public ngOnInit() {
    this.targetTypeService
      .getAllTargetTypes()
      .then(targetTypes => {
        this.targetTypes = targetTypes;
      });
  }

  public onChange(value: TargetType): void {
    this.targetTypeChange.emit(value);
  }

}
