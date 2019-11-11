import { UserService } from './../service/user.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  router: Router;
  currentUser: User;
  constructor(private angularFireAuth: AngularFireAuth, router: Router, private userService: UserService) {
    this.router = router;
  }

  async SignIn(mail: string, password: string) {

    if (this.angularFireAuth.auth.currentUser === null) {
      await this.angularFireAuth.auth.signInWithEmailAndPassword(mail, password)
        .catch((error) => {
          this.router.navigate(['/login']);
          console.error(error);
        });

      if (this.angularFireAuth.auth.currentUser !== null) {
        this.userService.read_user(this.angularFireAuth.auth.currentUser.uid)
          .then((snapshot) =>
            snapshot.empty ? this.userService.create_user(this.angularFireAuth.auth.currentUser,"") : snapshot.forEach((doc) => {
              this.MontaUsuario(doc.data(), doc.id);
            })
          );
      }
    } else {
      this.userService.read_user(this.angularFireAuth.auth.currentUser.uid)
        .then((snapshot) =>
          snapshot.forEach((doc) => {
            this.MontaUsuario(doc.data(), doc.id);
          })
        );
    }
  }

  get_auth(){
    return this.angularFireAuth.auth;
  }

  MontaUsuario(docUser, idDoc) {
    sessionStorage.setItem('userSession', JSON.stringify(docUser));
    sessionStorage.setItem('idDoc', idDoc);
    this.router.navigate(['/dashboard']);
  }

  SignOut() {
    this.angularFireAuth.auth.signOut();
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  /* Sign up */
  SignUp(email: string, password: string, nome: string) {
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed up!', res);
        try {
          this.userService.create_user(res.user, nome);
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
    const userSession = sessionStorage.getItem('userSession');

    console.log(!(user === null));
    return !(user === null && userSession === null);
  }
}