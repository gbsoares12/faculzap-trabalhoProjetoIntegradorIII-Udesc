import { AuthenticationService } from '../../shared/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    this.redirecionaSeLogado();
  } 
  router: Router;
  email: string;
  password: string;

  constructor(public authenticationService: AuthenticationService, router: Router){ 
    this.router = router;
  }

  signIn(email: string, password: string) {
    this.authenticationService.SignIn(email, password);
  }

  registrarConta () {
    this.router.navigate(['/register']);
  }

  redirecionaSeLogado() {
    console.log('teste');
    if(this.authenticationService.isUserLoggedIn){
      this.router.navigate(['/dashboard']);
    }
  }

}
