import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <hr/>
    <site></site>
    <hr/>
    <scope></scope>
    `,
})

export class AppComponent  { name = 'World'; }
