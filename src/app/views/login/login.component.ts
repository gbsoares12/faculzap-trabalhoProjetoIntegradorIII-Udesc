import { User } from './../../../model/user';
import { AuthenticationService } from '../../shared/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    this.redirecionaSeLogado();
  }
  router: Router;
  email: string;
  password: string;
  logado: boolean;
  currentUser: User;
  constructor(public authenticationService: AuthenticationService,
    router: Router,
    private messageService: MessageService) {
    this.router = router;
  }

  async signIn(email: string, password: string) {
   await this.authenticationService.SignIn(email, password, "")
  }

  registrarConta() {
    this.router.navigate(['/register']);
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Logado com sucesso', detail: 'Bem vindo ao Faculzap' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Usuário e senha não correspondem a um usuário cadastrado', detail: 'Valição falhou' });
  }

  redirecionaSeLogado() {
    if (this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

}
