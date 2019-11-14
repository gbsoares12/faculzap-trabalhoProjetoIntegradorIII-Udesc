import { UserService } from './../../service/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';

import { AuthenticationService } from '../../shared/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
  providers: [MessageService],
})
export class RegisterComponent {

  nome: string;
  email: string;
  password: string;
  confirmPassword: string;
  router: Router;

  constructor(public authenticationService: AuthenticationService, router: Router, private messageService: MessageService) {
    this.router = router;
  }

  async signUp(email: string, password: string, confirmPassword: string, nome: string) {

    if (email.length < 1 || password.length < 1 || confirmPassword.length < 1 || nome.length < 1) {
      this.showErrorInputVoid();
    } else if (nome.length < 4) {
      this.showErrorNameInvalid();
    } else if (!email.includes("@")) {
      this.showErrorEmailInvalid();
    } else if (password.length < 5) {
      this.showErrorPassword();
    } else if (password !== confirmPassword) {
      this.showErrorConfirmPasswordInvalid();
    } else {
      try {
        // await this.authenticationService.SignUp(email, password, nome);
        this.showSuccess();
        this.email = '';
        this.password = '';
      } catch (e) {
        console.error(e);
        this.showErrorEmailInvalid();
      }
    }
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Criado com sucesso!', detail: 'O usuário já está pronto para o uso.' });
  }

  showErrorInputVoid() {
    this.messageService.add({ severity: 'error', summary: 'Campo(s) vazio(s)!', detail: 'Insira todos os campos corretamente.' });
  }

  showErrorPassword() {
    this.messageService.add({ severity: 'error', summary: 'Insira uma senha válida!', detail: 'A senha precisa ter no mínimo 6 digitos.' });
  }

  showErrorEmailInvalid() {
    this.messageService.add({ severity: 'error', summary: 'Erro no email!', detail: 'Insira um e-mail válido.' });
  }

  showErrorConfirmPasswordInvalid() {
    this.messageService.add({ severity: 'error', summary: 'Erro ao confirmar senha!', detail: 'A senha e confirmação não são iguais.' });
  }

  showErrorNameInvalid() {
    this.messageService.add({ severity: 'error', summary: 'Nome inválido!', detail: 'O nome precisa ter no mínimo 4 letras.' });
  }

}
