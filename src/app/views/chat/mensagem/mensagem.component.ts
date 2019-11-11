import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../model/user';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss']
})
export class MensagemComponent {
  currentUser: User;


  @Input('nomeUser')
  public nomeUser: string;

  @Input('fotoPerfil')
  public fotoPerfil: string;

  @Input('texto')
  public texto: string;

  @Input('foto_enviado_por')
  public foto_enviado_por: string;


  
  constructor() { 
    this.currentUser = JSON.parse(sessionStorage.getItem('userSession'));
  }


}
