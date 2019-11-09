import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss']
})
export class MensagemComponent implements OnInit {

  @Input('nomeUser')
  public nomeUser: string;

  @Input('fotoPerfil')
  public fotoPerfil: string;

  @Input('texto')
  public texto: string;
  
  constructor() { }

  ngOnInit() {
  }

}
