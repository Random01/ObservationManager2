import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { Observable } from 'rxjs';
import { Constellation } from '../../shared/models/constellation.mode';
import { ConstellationsService } from '../../constellations/shared/constellations.service';

@Component({
    selector: 'om-constellation-selector',
    templateUrl: './constellation-selector.component.html',
    styleUrls: ['./constellation-selector.component.css'],
    providers: [ConstellationsService]
})
export class ConstellationSelectorComponent implements OnInit {

    @Input() constellation: Constellation;
    @Output() constellationChange = new EventEmitter<Constellation>();

    constellations: Constellation[] = [];
    filteredConstellations: Observable<Constellation[]>;

    constructor(
        private constellationService: ConstellationsService) {
    }

    onConstellationChange(model: Constellation) {
        this.constellation = model;
        this.constellationChange.emit(model);
    }

    ngOnInit() {
        this.constellationService
            .getAll()
            .then((vendors) => {
                this.constellations = vendors;

                this.filteredConstellations = new Observable((subscriber) => {
                    subscriber.next(this.constellations);
                });
            });
    }

}
