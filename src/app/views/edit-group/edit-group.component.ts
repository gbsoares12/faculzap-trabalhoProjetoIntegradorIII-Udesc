import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from '../../../model/user';
import { GrupoService } from '../../service/grupo.service';
import { Grupo } from '../../../model/grupo';
import { CalendarApiService } from '../../service/calendar-api.service';

@Component({
  selector: 'app-edit-group',
  providers: [MessageService],
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.scss']
})
export class EditGroupComponent implements OnInit {
  idGrupoAtivo: string;
  currentUser: User;
  tituloText: string;
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

  routerNavigation: Router;

  constructor(private router: ActivatedRoute,
    private grupoService: GrupoService,
    private messageService: MessageService,
    routers: Router,
    private calendarService: CalendarApiService) {

    this.router.params.subscribe(res => this.idGrupoAtivo = res.idGrupo);
    this.currentUser = JSON.parse(sessionStorage.getItem('userSession'));
    this.routerNavigation = routers
  }

  async ngOnInit() {
    await this.grupoService.get_objGrupo(this.idGrupoAtivo).then(async (documentSnapshot) => {
      await documentSnapshot.forEach((grupoDoc) => {
        if (grupoDoc.exists) {
          this.usuariosIntegrantes = grupoDoc.data().usuarios
          this.tituloText = grupoDoc.data().titulo
        }
      });
    })
    this.alunos = await this.grupoService.get_todos_usuarios_alunos_edit(this.usuariosIntegrantes);
    this.professores = await this.grupoService.get_todos_usuarios_professores_edit(this.usuariosIntegrantes);
    this.alunosRemover = await this.grupoService.get_todos_usuarios_alunos_edit_remover(this.usuariosIntegrantes, this.currentUser.uid);
    this.professoresRemover = await this.grupoService.get_todos_usuarios_professores_edit_remover(this.usuariosIntegrantes, this.currentUser.uid);
  }

  addNovosIntegrantes() {
    let arrayUsuariosAlunos = [];
    //Para adicionar novos integrantes
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

    return arrayUsuariosAlunos;
  }
  editarGrupo(titulo: string, urlCalendar: string) {

    if (titulo.length < 6) {
      this.showError();
    } else {
      let arrayAdicionarNovosIntegrantes = [];
      let newGrupo: Grupo;
      if (this.selectedAlunos !== undefined || this.selectedProfessores !== undefined) {
        arrayAdicionarNovosIntegrantes = this.addNovosIntegrantes();
      }

      //Para remover os integrantes já ativos
      let arrayAlunosRemoverUid = [];
      let arraySemIntegrantesRemovidos = [];
      if (this.selectedAlunosRemover !== undefined) {
        if (this.selectedAlunosRemover.length !== 0) {
          this.selectedAlunosRemover.forEach((aluno) => {
            arrayAlunosRemoverUid.push(aluno.uid);
          })
          arraySemIntegrantesRemovidos = this.usuariosIntegrantes.filter(function (element, index, array) {
            if (arrayAlunosRemoverUid.indexOf(element) === -1)
              return element;
          });
        }
      }

      let arrayProfessoresRemoverUid = [];
      if (this.selectedProfessoresRemover !== undefined) {
        if (this.selectedProfessoresRemover.length !== 0) {
          this.selectedProfessoresRemover.forEach((professor) => {
            arrayProfessoresRemoverUid.push(professor.uid);
          })
          arraySemIntegrantesRemovidos = arraySemIntegrantesRemovidos.filter(function (element, index, array) {
            if (arrayProfessoresRemoverUid.indexOf(element) === -1)
              return element;
          });
        }
      }

      //Array com os integrante removidos
      let arrayNovoIntegrantes: string[]= [];
      if (arraySemIntegrantesRemovidos.length > 0 || arrayAdicionarNovosIntegrantes.length > 0) {
        if (arraySemIntegrantesRemovidos.length > 0) {
          arraySemIntegrantesRemovidos.forEach((uidIntegrante) => {
            arrayNovoIntegrantes = [...arrayNovoIntegrantes, uidIntegrante]
          })
        }
        if (arrayAdicionarNovosIntegrantes.length > 0) {
          arrayAdicionarNovosIntegrantes.forEach((uidNovosIntegrantes) => {
            arrayNovoIntegrantes = [...arrayNovoIntegrantes, uidNovosIntegrantes]
          })
        }
        //Caso não tenha nem um integrante sendo removido
        if (arraySemIntegrantesRemovidos.length === 0) {
          this.usuariosIntegrantes.forEach((uidIntegrante)=>{
            arrayNovoIntegrantes = [...arrayNovoIntegrantes, uidIntegrante]
          })
          
        }
      } else {
        arrayNovoIntegrantes = this.usuariosIntegrantes;
      }

      newGrupo = {
        uid: "",
        titulo: titulo,
        imagem_url: "",
        usuarios: arrayNovoIntegrantes,
        criador: this.currentUser.uid
      };
      this.grupoService.update_grupo(this.idGrupoAtivo, newGrupo);
      this.calendarService.getEventosCalendarioMoodle(urlCalendar, this.idGrupoAtivo);
      this.routerNavigation.navigate(['/dashboard']);
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
