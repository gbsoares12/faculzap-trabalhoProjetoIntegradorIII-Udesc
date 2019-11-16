import { Mensagem } from './../../../model/mensagem';
import { GrupoService } from './../../service/grupo.service';
import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { User } from '../../../model/user';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/components/common/api';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [MessageService]

})
export class ChatComponent implements OnInit {
  tituloDisciplina: String;
  mensagensBox: Mensagem[] = [];
  mensagemSelected: Mensagem;
  inputMensagem: String;
  events: any[] = [];
  options: any;
  // Conf do Grupo
  currentUser: User;
  idDocUser: string;
  idGrupoAtivo: string;


  constructor(private grupoService: GrupoService, private router: ActivatedRoute, private messageService: MessageService) {
    this.router.params.subscribe(res => this.idGrupoAtivo = res.idGrupo);

    this.currentUser = JSON.parse(sessionStorage.getItem('userSession'));
    this.idDocUser = sessionStorage.getItem('idDoc');

    this.tituloDisciplina = 'Projeto Integrador';
  }

  ngOnInit() {
    // Conf Calendario
    this.events = [];
    this.updateCalendar();
    this.grupoService.get_objGrupo(this.idGrupoAtivo).then((docSnapshot) => {
      docSnapshot.forEach((doc) => {
        if (doc.exists) {
          this.tituloDisciplina = doc.data().titulo
        }
      })
    })

    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: new Date,
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: true,
      dateClick: (e) => {
        console.log(e);
      }
    };    // Fim Calendario

    this.grupoService.get_mensagensGrupo(this.idGrupoAtivo).subscribe(
      (next) => {
        this.mensagensBox = []
        if (next) {
          next.forEach((doc) => {
            this.mensagensBox.push(this.grupoService.criaObjMensagem(doc.payload.doc))
          });
          this.mensagensBox.sort((a, b) => a.data_envio < b.data_envio ? 1 : -1);
        }
      },
      (error) => { },
    )
  }



  addMensagem(texto: String): void {
    if (texto.length > 0) {
      let mensagem = {
        uid: '',
        arquivo_url: '',
        data_envio: new Date(),
        enviado_por: this.currentUser.displayName,
        imagem_url: '',
        texto: texto,
        foto_enviado_por: this.currentUser.photoURL
      }
      this.grupoService.enviarMensagem(this.idGrupoAtivo, mensagem);
    }
  }

  async updateCalendar() {
    this.events = this.events.concat(await this.grupoService.get_eventosCalendario(this.idGrupoAtivo));

    this.options = { ...this.options };
  }

  async inputFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      const arquivo = event.target.files[0];
      if (arquivo.type === "image/jpeg" || arquivo.type === "application/pdf") {
        let uidMensage = "";
        let mensagem = {
          uid: '',
          arquivo_url: '',
          data_envio: new Date(),
          enviado_por: this.currentUser.displayName,
          imagem_url: '',
          texto: ' ',
          foto_enviado_por: this.currentUser.photoURL
        }

        uidMensage = await this.grupoService.enviarMensagem(this.idGrupoAtivo, mensagem);
        const arquivo = event.target.files[0];

        let resultUpload = await this.grupoService.enviar_arquivo(arquivo, uidMensage, this.idGrupoAtivo);
        let urlArquivoEnviado = "";
        await resultUpload.ref.getDownloadURL().then(function (downloadURL) {
          urlArquivoEnviado = downloadURL
        });
        let newMensagem;
        if (arquivo.type === "image/jpeg") {
          newMensagem = {
            uid: '',
            arquivo_url: '',
            data_envio: new Date(),
            enviado_por: this.currentUser.displayName,
            imagem_url: urlArquivoEnviado,
            texto: ' ',
            foto_enviado_por: this.currentUser.photoURL
          }
        } else {
          newMensagem = {
            uid: '',
            arquivo_url: urlArquivoEnviado,
            data_envio: new Date(),
            enviado_por: this.currentUser.displayName,
            imagem_url: '',
            texto: ' ',
            foto_enviado_por: this.currentUser.photoURL
          }
        }
        this.grupoService.update_mensageWithFile(uidMensage, newMensagem, this.idGrupoAtivo);
        this.showSuccess();
      }
      else {
        this.showError();
      }
    }
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Arquivo enviado!', detail: 'O arquivo foi enviado com sucesso.' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Erro ao enviar o arquivo!', detail: 'Verifique se o arquivo é uma imagem ou PDF.' });
  }

}
