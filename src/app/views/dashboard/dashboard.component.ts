import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/authentication.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
  email: string;
  
  constructor(public authenticationService: AuthenticationService){

  }

}
