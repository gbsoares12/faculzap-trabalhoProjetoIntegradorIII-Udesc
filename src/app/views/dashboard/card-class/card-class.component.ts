import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../model/user';
import { GrupoService } from '../../../service/grupo.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-card-class',
  templateUrl: './card-class.component.html',
  styleUrls: ['./card-class.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class CardClassComponent implements OnInit {
  ngOnInit(): void {
    this.integrantes = this.onlines.length + '';
    if (this.currentUser.uid === this.uidCriador) {
      this.donoGrupo = true;
    }
  }

  @Input('titulo')
  public titulo: string;

  @Input('onlines')
  public onlines: any[];

  @Input('idGrupo')
  public idGrupo: string;

  @Input('criador')
  public uidCriador: string;

  integrantes: string;
  currentUser: User;
  donoGrupo: boolean = false;

  constructor(public router: Router, private grupoService: GrupoService, 
    private confirmationService: ConfirmationService, private messageService: MessageService) {
    this.currentUser = JSON.parse(sessionStorage.getItem('userSession'));
  }
  deleteGroup() {
    if (this.uidCriador === this.currentUser.uid) {
      this.grupoService.delete_grupo(this.idGrupo);
    }
  }

  confirmDeleteGroup() {
    this.confirmationService.confirm({
      message: 'Deseja realmente excluir o grupo?',
      header: 'Confirme a exclusão',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.deleteGroup();
        this.showSuccess();
      },
      reject: () => {
        this.showError();
      }
    });
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Grupo foi excluído.' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Cancelado!', detail: 'O grupo não removido.' });
  }

}
