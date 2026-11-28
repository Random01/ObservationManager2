import { Component, OnInit, Input, ChangeDetectionStrategy, signal } from '@angular/core';

import ObservationSearchParameters from './observation-search-parameters.model';

import { Eyepiece, Filter, Lens, Scope } from '../../shared/models/equipment/equipment';

import { ScopeService } from '../../scopes/shared/scope.service';
import { EyepieceService } from '../../eyepieces/shared/eyepiece.service';
import { FilterService } from '../../filters/shared/filter.service';
import { LensService } from '../../lenses/shared/lens.service';
import { SiteService } from '../../sites/shared/site.service';
import { Site } from '../../shared/models/models';
import { TargetSelectorComponent } from '../../target/target-selector/target-selector.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'om-observation-search',
  templateUrl: 'observation-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, TargetSelectorComponent],
})
export class ObservationSearchComponent implements OnInit {
  @Input()
  public searchParameters?: ObservationSearchParameters;

  public readonly scopes = signal<Scope[]>([]);
  public readonly eyepieces = signal<Eyepiece[]>([]);
  public readonly filters = signal<Filter[]>([]);
  public readonly lenses = signal<Lens[]>([]);
  public readonly sites = signal<Site[]>([]);

  constructor(
    private readonly scopeService: ScopeService,
    private readonly eyepieceService: EyepieceService,
    private readonly filterService: FilterService,
    private readonly lensService: LensService,
    private readonly siteService: SiteService,
  ) {}

  public ngOnInit(): void {
    this.scopeService.getAll().then((scopes) => this.scopes.set(scopes));
    this.eyepieceService.getAll().then((eyepieces) => this.eyepieces.set(eyepieces));
    this.filterService.getAll().then((filters) => this.filters.set(filters));
    this.lensService.getAll().then((lenses) => this.lenses.set(lenses));
    this.siteService.getAll().then((sites) => this.sites.set(sites));
  }
}
