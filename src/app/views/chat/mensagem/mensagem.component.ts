import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss']
})
export class MensagemComponent implements OnInit {
  ngOnInit(): void {
    if (this.texto.length > 1) {
      this.temTexto = true;
    } else {
      this.temTexto = false;
    }
    if(this.imagem_url.length > 1){
      this.fileIsImage = true;
    }else {
      this.fileIsImage = false
    }
  }
  currentUser: User;


  @Input('nomeUser')
  public nomeUser: string;

  @Input('fotoPerfil')
  public fotoPerfil: string;

  @Input('texto')
  public texto: string;

  @Input('foto_enviado_por')
  public foto_enviado_por: string;

  @Input('imagem_url')
  public imagem_url: string;

  @Input('arquivo_url')
  public arquivo_url: string;

  teste: string;
  temTexto: boolean
  fileIsImage: boolean
  constructor(private router: Router) {
    this.currentUser = JSON.parse(sessionStorage.getItem('userSession'));
  }

  goToDetalhesByState() {
    this.router.navigateByUrl('/openfile', {
    state: { imagem_url: this.imagem_url }
    })
  }


}
