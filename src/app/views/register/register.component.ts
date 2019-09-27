import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  router: Router;
  constructor(router: Router) {
    this.router = router;
   }

onClickRegister(){
  this.router.navigate(['/login']);
}

}
