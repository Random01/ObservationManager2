import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Dec } from '../../shared/models/dec.model';

@Component({
  selector: 'om-declination-selector',
  templateUrl: './declination-selector.component.html',
  styleUrls: ['./declination-selector.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeclinationSelectorComponent {

  @Input() public dec?: Dec;
  @Output() public readonly decChange = new EventEmitter<Dec>();

}
