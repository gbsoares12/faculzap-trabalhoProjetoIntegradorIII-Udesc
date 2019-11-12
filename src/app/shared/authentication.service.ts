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

  async SignIn(mail: string, password: string, nome: string) {
    await this.angularFireAuth.auth.signInWithEmailAndPassword(mail, password)
      .catch((error) => {
        this.router.navigate(['/login']);
        console.error(error);
      });
    if (this.angularFireAuth.auth.currentUser !== null) {
      let result = await this.userService.read_user(this.angularFireAuth.auth.currentUser.uid);
      if (result.length > 0) {
        this.MontaUsuario(result[0], result[2]);
      } else {
        let userVerified: User;
        let idDoc: string;
        await this.userService
          .create_user(this.angularFireAuth.auth.currentUser, nome, null)
          .then((doc) => {
            if (doc.exists) {
              userVerified = this.userService.montaObjUser(doc);
              idDoc = doc.id
              this.MontaUsuario(userVerified, idDoc);
            } else {
              this.router.navigate(['/login']);
            }
          })
      }
    }
    this.router.navigate(['/dashboard']);
  }

  get_auth() {
    return this.angularFireAuth.auth;
  }

  MontaUsuario(docUser, idDoc) {
    sessionStorage.setItem('userSession', JSON.stringify(docUser));
    sessionStorage.setItem('idDoc', idDoc);
  }

  async SignOut() {
    await this.angularFireAuth.auth.signOut();
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  /* Sign up */
  async SignUp(email: string, password: string, nome: string) {
    await this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(async res => {
        console.log('Successfully signed up!', res);
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      }).finally(() => {
        this.SignIn(email, password, nome)
      });
  }

  isUserLoggedIn() {
    this.angularFireAuth.authState.subscribe(async (user) => {
      if (user !== null) {
        let result = await this.userService.read_user(this.angularFireAuth.auth.currentUser.uid);
        if (result.length > 0) {
          this.MontaUsuario(result[0], result[2]);
        }
        return true;
      } else {
        this.SignOut();
        this.router.navigate(['/login']);
        return false;
      }
    });
    return true;
  }
}