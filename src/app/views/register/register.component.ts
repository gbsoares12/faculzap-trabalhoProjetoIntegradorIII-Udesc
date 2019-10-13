import { UserService } from './../../service/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../shared/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  email: string;
  password: string;
  router: Router;

  constructor(public authenticationService: AuthenticationService, router: Router, private userService: UserService) {
    this.router = router;
   }

  signUp(email: string, password: string) {
    try{
      this.authenticationService.SignUp(email, password);
      this.email = ''; 
      this.password = '';
    } catch (e){
      console.error(e);
    }
    
  }

}
