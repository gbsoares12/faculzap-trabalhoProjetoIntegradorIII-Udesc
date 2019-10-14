import { Component, OnInit, Input } from '@angular/core';
import { Grupo } from '../../../../model/grupo';
import { User } from '../../../../model/user';
import { GrupoService } from '../../../service/grupo.service';

@Component({
  selector: 'app-container-materia-card',
  templateUrl: './container-materia-card.component.html',
  styleUrls: ['./container-materia-card.component.scss']
})
export class ContainerMateriaCardComponent implements OnInit {
  currentUser: User;
  idDocUser: string;
  gruposAtivos: Grupo[] = [];

  constructor(private grupoService: GrupoService) {
    this.currentUser = JSON.parse(sessionStorage.getItem('userSession'));
    this.idDocUser = sessionStorage.getItem('idDoc');
  }

  ngOnInit(): void {
    this.getGrupos();
  }

  async getGrupos() {
    await this.grupoService.read_grupo(this.currentUser.uid).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.gruposAtivos.push(this.grupoService.criaObjGrupo(doc.data()));
      });
    });
  }
}
