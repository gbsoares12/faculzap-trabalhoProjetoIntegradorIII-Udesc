import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  userData: Observable<firebase.User>;
  router: Router;
  constructor(private angularFireAuth: AngularFireAuth, router: Router) {
    this.userData = angularFireAuth.authState;
    this.router = router;
  }

  SignIn(mail: string, password: string) {
    return new Promise((resolve, reject) => {
      this.angularFireAuth.auth.signInWithEmailAndPassword(mail, password).then((result) => {
        sessionStorage['token'] = result.user.getIdToken;
        sessionStorage['userSession'] = result.user;
        this.router.navigate(['/dashboard']);
      })
        .catch((error) => {
          this.router.navigate(['/login']);
        });
    })
      .catch((error) => {
        this.router.navigate(['/login']);
      });
  }

  SignOut() {
    this.angularFireAuth.auth.signOut();
    this.router.navigate(['/login']);
  }

  /* Sign up */
  SignUp(email: string, password: string) {
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed up!', res);
        this.router.navigate(['/login']);
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });
  }

  isUserLoggedIn() {
    const user = this.angularFireAuth.auth.currentUser;
    console.log(!(user === null));
    return !(user === null);
  }
}