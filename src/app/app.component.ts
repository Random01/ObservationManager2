import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './auth/shared/authentication.service';

@Component({
  selector: 'om-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.populate();
  }

}
