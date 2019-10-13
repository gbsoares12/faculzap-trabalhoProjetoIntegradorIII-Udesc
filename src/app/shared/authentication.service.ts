import { UserData } from './../../model/user-data';
import { UserService } from './../service/user.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  userData: Observable<firebase.User>;
  router: Router;
  currentUser: UserData;
  correct: boolean;

  constructor(private angularFireAuth: AngularFireAuth, router: Router, private userService: UserService) {
    this.userData = angularFireAuth.authState;
    this.router = router;
  }

  SignIn(mail: string, password: string) {
    var teste = this;

      if (this.angularFireAuth.auth.currentUser == null) {
        this.angularFireAuth.auth.signInWithEmailAndPassword(mail, password).then((result) => {

          sessionStorage.setItem("userSession", JSON.stringify(result.user));

          this.userService.read_user(result.user.uid)
            .then((snapshot) =>
              snapshot.empty ? this.userService.create_user(result.user) : null
            );
          this.router.navigate(['/dashboard']);
          teste.correct = true;
        })
          .catch((error) => {
            this.router.navigate(['/login']);
            console.error(error);
            teste.correct = false;
          });
      } else {
        sessionStorage.setItem("userSession", JSON.stringify(this.angularFireAuth.user));
        teste.correct = true;
      }
      return this.correct;
  }

  SignOut() {
    this.angularFireAuth.auth.signOut();
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  /* Sign up */
  SignUp(email: string, password: string) {
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed up!', res);
        try {
          this.userService.create_user(res.user);
        } catch (error) {
          console.error(error);
        }

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