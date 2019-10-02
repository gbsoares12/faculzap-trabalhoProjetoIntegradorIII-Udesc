import { Component, OnInit } from '@angular/core';
import { Mensagem } from './mensagem';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  tituloDisciplina: String;
  mensagensBox: Mensagem[];
  mensagemSelected: Mensagem;
  inputMensagem: String;

  constructor() { 
    this.tituloDisciplina = 'Projeto Integrador';
    this.mensagensBox = [
      {arquivo_url: '' ,data_envio: null, enviado_por: 'Gabriel Soares', imagem_url: 'none', texto: 'Oi'},
  ];
  }

  ngOnInit() {
  }
  
  addMensagem (texto: String): void {
    this.mensagensBox.push({arquivo_url: '' ,data_envio: null, enviado_por: 'Gabriel Soares', imagem_url: '', texto: texto});
  }
}
