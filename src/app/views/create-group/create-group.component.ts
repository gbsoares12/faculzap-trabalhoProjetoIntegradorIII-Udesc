import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../../service/grupo.service';
import { User } from '../../../model/user';
import { Grupo } from '../../../model/grupo';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'create-group.component.html'
})

export class CreateGroupComponent implements OnInit {
  async ngOnInit(){
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
  constructor(private grupoService: GrupoService, router: Router) { 
    this.currentUser = JSON.parse(sessionStorage.getItem('userSession'));
    this.router = router;
  }

  criarGrupo(titulo: string){
    let newGrupo: Grupo;
    let arrayUsuariosAlunos = [this.currentUser.uid];

    this.selectedAlunos.forEach((aluno)=>{
      arrayUsuariosAlunos = [...arrayUsuariosAlunos,aluno["uid"]]
    })

    newGrupo = {
      uid: "",
      titulo: titulo,
      imagem_url: "",
      diciplina: [],
      mensagens: [],
      usuarios: arrayUsuariosAlunos
    };
    this.grupoService.create_grupo(newGrupo);
    this.router.navigate(['/dashboard']);
  }
}
