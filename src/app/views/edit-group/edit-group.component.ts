import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from '../../../model/user';
import { GrupoService } from '../../service/grupo.service';

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

  constructor(private router: ActivatedRoute, private grupoService: GrupoService) {
    this.router.params.subscribe(res => this.idGrupoAtivo = res.idGrupo);
    this.currentUser = JSON.parse(sessionStorage.getItem('userSession'));

  }

  async ngOnInit() {
    this.alunos = await this.grupoService.get_todos_usuarios_alunos(this.currentUser.uid);
    this.professores = await this.grupoService.get_todos_usuarios_professores(this.currentUser.uid);
  }

}
