import { Component, Input } from '@angular/core';
import { Site } from './../../shared/models/site.model';

@Component({
    selector: 'site',
    templateUrl: './site.component.html'
})

export class SiteComponent {
    @Input() site: Site;
}