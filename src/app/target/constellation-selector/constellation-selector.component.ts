import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { Observable } from 'rxjs';

import { Constellation } from '../../shared/models/constellation.model';
import { ConstellationsService } from '../../constellations/shared/constellations.service';

@Component({
  selector: 'om-constellation-selector',
  templateUrl: './constellation-selector.component.html',
  styleUrls: ['./constellation-selector.component.css'],
})
export class ConstellationSelectorComponent implements OnInit {

  @Input()
  public constellation: Constellation;

  @Output()
  public readonly constellationChange = new EventEmitter<Constellation>();

  public isLoading = false;
  public constellations: Constellation[] = [];
  public filteredConstellations: Observable<Constellation[]>;

  constructor(
    private readonly constellationService: ConstellationsService,
  ) { }

  public onConstellationChange(model: Constellation) {
    this.constellation = model;
    this.constellationChange.emit(model);
  }

  public async ngOnInit() {
    this.isLoading = true;
    try {
      this.constellations = await this.constellationService.getAll();
      this.filteredConstellations = new Observable(subscriber => {
        subscriber.next(this.constellations);
      });
    } finally {
      this.isLoading = false;
    }
  }

}
