import { Component, OnInit, Input } from '@angular/core';

import ObservationSearchParameters from './observation-search-parameters.model';

import {
  Eyepiece,
  Filter,
  Lens,
  Scope
} from '../../shared/models/equipment/equipment';

import { ScopeService } from '../../scopes/shared/scope.service';
import { EyepieceService } from '../../eyepieces/shared/eyepiece.service';
import { FilterService } from '../../filters/shared/filter.service';
import { LensService } from '../../lenses/shared/lens.service';
import { SiteService } from '../../sites/shared/site.service';
import { Site } from '../../shared/models/models';

@Component({
  selector: 'om-observation-search',
  templateUrl: './observation-search.component.html',
  styleUrls: [
    './observation-search.component.css'
  ],
})
export class ObservationSearchComponent implements OnInit {

  @Input()
  public searchParameters?: ObservationSearchParameters;

  public scopes?: Scope[];
  public eyepieces?: Eyepiece[];
  public filters?: Filter[];
  public lenses?: Lens[];
  public sites?: Site[];

  constructor(
    private readonly scopeService: ScopeService,
    private readonly eyepieceService: EyepieceService,
    private readonly filterService: FilterService,
    private readonly lensService: LensService,
    private readonly siteService: SiteService,
  ) { }

  public ngOnInit(): void {
    this.scopeService.getAll().then(scopes => this.scopes = scopes);
    this.eyepieceService.getAll().then(eyepieces => this.eyepieces = eyepieces);
    this.filterService.getAll().then(filters => this.filters = filters);
    this.lensService.getAll().then(lenses => this.lenses = lenses);
    this.siteService.getAll().then(sites => this.sites = sites);
  }

}
