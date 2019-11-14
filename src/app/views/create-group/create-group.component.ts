import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../../service/grupo.service';
import { User } from '../../../model/user';
import { Grupo } from '../../../model/grupo';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';

@Component(
  {
    providers: [MessageService],
    templateUrl: 'create-group.component.html'
  })

export class CreateGroupComponent implements OnInit {
  async ngOnInit() {
    this.alunos = await this.grupoService.get_todos_usuarios_alunos(this.currentUser.uid);
    this.professores = await this.grupoService.get_todos_usuarios_professores(this.currentUser.uid);
  }
  currentUser: User;
  titulo: string;
  router: Router;
  alunos: any[] = [];
  selectedAlunos: any[];
  professores: any[] = [];
  selectedProfessores: any[];
  constructor(private grupoService: GrupoService, router: Router, private messageService: MessageService) {
    this.currentUser = JSON.parse(sessionStorage.getItem('userSession'));
    this.router = router;
  }

  criarGrupo(titulo: string) {
    if (titulo.length < 6) {
      this.showError();
    } else {
      let newGrupo: Grupo;
      let arrayUsuariosAlunos = [this.currentUser.uid];
      if (this.selectedAlunos !== undefined) {
        this.selectedAlunos.forEach((aluno) => {
          arrayUsuariosAlunos = [...arrayUsuariosAlunos, aluno["uid"]]
        })
      }
      if (this.selectedProfessores !== undefined) {
        this.selectedProfessores.forEach((professor) => {
          arrayUsuariosAlunos = [...arrayUsuariosAlunos, professor["uid"]]
        })
      }
      newGrupo = {
        uid: "",
        titulo: titulo,
        imagem_url: "",
        diciplina: [],
        mensagens: [],
        usuarios: arrayUsuariosAlunos,
        criador: this.currentUser.uid
      };
      this.grupoService.create_grupo(newGrupo);
      this.router.navigate(['/dashboard']);
      this.showSuccess();
    }
  }


  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Criado com sucesso!', detail: 'O grupo já está ativo para o uso.' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Insira um titulo corretamente!', detail: 'Erro ao criar grupo.' });
  }

}
