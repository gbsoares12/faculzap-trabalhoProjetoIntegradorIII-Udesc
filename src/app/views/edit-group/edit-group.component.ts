import { DocumentSnapshot } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from '../../../model/user';
import { GrupoService } from '../../service/grupo.service';
import { Grupo } from '../../../model/grupo';

@Component({
  selector: 'app-edit-group',
  providers: [MessageService],
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.scss']
})
export class EditGroupComponent implements OnInit {
  idGrupoAtivo: string;
  currentUser: User;
  titulo: string;

  alunos: any[] = [];
  selectedAlunos: any[];
  professores: any[] = [];
  selectedProfessores: any[];

  alunosRemover: any[] = [];
  selectedAlunosRemover: any[];
  professoresRemover: any[] = [];
  selectedProfessoresRemover: any[];

  grupoAtivo: Grupo;
  usuariosIntegrantes: string[];

  constructor(private router: ActivatedRoute, private grupoService: GrupoService) {
    this.router.params.subscribe(res => this.idGrupoAtivo = res.idGrupo);
    this.currentUser = JSON.parse(sessionStorage.getItem('userSession'));

  }

  async ngOnInit() {
    await this.grupoService.get_objGrupo(this.idGrupoAtivo).then(async (documentSnapshot) => {
      await documentSnapshot.forEach((grupoDoc) => {
        if (grupoDoc.exists) {
          this.usuariosIntegrantes = grupoDoc.data().usuarios
        }
      });
    })
    this.alunos = await this.grupoService.get_todos_usuarios_alunos_edit(this.usuariosIntegrantes);
    this.professores = await this.grupoService.get_todos_usuarios_professores_edit(this.usuariosIntegrantes);
    this.alunosRemover = await this.grupoService.get_todos_usuarios_alunos_edit_remover(this.usuariosIntegrantes, this.currentUser.uid);
    this.professoresRemover = await this.grupoService.get_todos_usuarios_professores_edit_remover(this.usuariosIntegrantes, this.currentUser.uid);
  }
}
