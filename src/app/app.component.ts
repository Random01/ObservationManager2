import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <ul>
        <li><a routerLink="/scopes">Scopes</a></li>
        <li><a routerLink="/sites">Sites</a></li>
    </ul>
    <router-outlet></router-outlet>
    `,
})

export class AppComponent  {

}
