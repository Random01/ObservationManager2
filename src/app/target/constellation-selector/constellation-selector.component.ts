import { Component, Input, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { AsyncPipe, NgForOf } from '@angular/common';

import { Observable } from 'rxjs';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { Constellation } from '../../shared/models/constellation.model';
import { ConstellationsService } from '../../constellations/shared/constellations.service';

@Component({
  selector: 'om-constellation-selector',
  templateUrl: 'constellation-selector.component.html',
  styleUrl: 'constellation-selector.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    NgForOf,
    AsyncPipe,
  ],
})
export class ConstellationSelectorComponent implements OnInit {

  @Input()
  public constellation?: Constellation;

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
