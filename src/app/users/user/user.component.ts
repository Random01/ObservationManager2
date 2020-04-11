import { Component, Input } from '@angular/core';
import { User } from '../../shared/models/user.model';

@Component({
    selector: 'om-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {
    @Input() user: User;
}
