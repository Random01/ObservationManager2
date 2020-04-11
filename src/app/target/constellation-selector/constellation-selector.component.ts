import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { Observable } from 'rxjs';

import { Constellation } from '../../shared/models/constellation.mode';
import { ConstellationsService } from '../../constellations/shared/constellations.service';

@Component({
    selector: 'om-constellation-selector',
    templateUrl: './constellation-selector.component.html',
    styleUrls: ['./constellation-selector.component.css'],
})
export class ConstellationSelectorComponent implements OnInit {

    @Input()
    constellation: Constellation;

    @Output()
    constellationChange = new EventEmitter<Constellation>();

    public isLoading = false;
    public constellations: Constellation[] = [];
    public filteredConstellations: Observable<Constellation[]>;

    constructor(
        private constellationService: ConstellationsService) {
    }

    onConstellationChange(model: Constellation) {
        this.constellation = model;
        this.constellationChange.emit(model);
    }

    async ngOnInit() {
        this.isLoading = true;
        try {
            this.constellations = await this.constellationService.getAll();
            this.filteredConstellations = new Observable((subscriber) => {
                subscriber.next(this.constellations);
            });
        } finally {
            this.isLoading = false;
        }
    }

}
