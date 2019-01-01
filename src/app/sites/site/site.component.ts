import { Component, Input } from '@angular/core';
import { Site } from '../../shared/models/site.model';
import { Degrees } from '../../shared/models/degrees.model';

@Component({
    selector: 'om-site',
    templateUrl: './site.component.html',
    styleUrls: ['./site.component.css']
})

export class SiteComponent {
    @Input() site: Site;

}
