import { Component } from '@angular/core';

import { Target } from '../../shared/models/target.model';
import { TargetService } from '../shared/target.service';

import { EntityListComponent } from '../../shared/components/entity-list.component';

@Component({
    selector: 'om-targets',
    templateUrl: './targets.component.html',
    providers: [TargetService]
})

export class TargetsComponent extends EntityListComponent<Target> {

    displayedColumns: string[] = [
        'name',
        'description',
        'actions'
    ];

    currentPage = 0;
    pageSize = 10;

    constructor(private service: TargetService) {
        super(service);
    }

    async loadAllItems(): Promise<void> {
        this.startLoading();

        const response = await this.storageService.getItems({
            size: this.pageSize,
            page: this.currentPage
        });

        this.endLoading();
        this.items = response.items;
    }

    nextPage() {
        this.currentPage++;
        this.loadAllItems();
    }

    previousPage() {
        this.currentPage--;
        if (this.currentPage < 0) {
            this.currentPage = 0;
        }
        this.loadAllItems();
    }
}
