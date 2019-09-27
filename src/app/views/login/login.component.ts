import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 
  router: Router;
  username: string;
  password: string;

  constructor(router: Router){ 
    this.router = router;
  }



  onSubmitLogin() {
    this.router.navigate(['/dashboard']);
  }

  onClickSingUp(){
    this.router.navigate(['/register']);
  }
}
