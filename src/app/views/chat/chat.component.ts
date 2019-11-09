import { Mensagem } from './../../../model/mensagem';
import { GrupoService } from './../../service/grupo.service';
import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { User } from '../../../model/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  tituloDisciplina: String;
  mensagensBox: Mensagem[] = [];
  mensagemSelected: Mensagem;
  inputMensagem: String;
  events: any[];
  options: any;
  // Conf do Grupo
  currentUser: User;
  idDocUser: string;
  idGrupoAtivo: string;

  constructor(private grupoService: GrupoService, private router: ActivatedRoute) {
    this.router.params.subscribe(res => this.idGrupoAtivo = res.idGrupo);

    this.currentUser = JSON.parse(sessionStorage.getItem('userSession'));
    this.idDocUser = sessionStorage.getItem('idDoc');

    this.tituloDisciplina = 'Projeto Integrador';
    
  }

  ngOnInit() {
    // Conf Calendario
    this.events = [
      {
        "title": "Trabalho de PIN III",
        "start": "2019-10-14"
      },
      {
        "title": "Evento Longo",
        "start": "2019-10-01",
        "end": "2019-10-08"
      },
      {
        "title": "Repetido",
        "start": "2019-10-17T20:30:00"
      },
      {
        "title": "Repetido",
        "start": "2019-10-19T20:50:00"
      },
      {
        "title": "Aula EAD",
        "start": "2019-10-25",
        "end": "2019-10-30"
      }
    ];
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
    };
    // Fim Calendario

    this.grupoService.get_mensagensGrupo(this.idGrupoAtivo).subscribe(
      (next) => {
        this.mensagensBox = []
        if (next) {
          next.forEach((doc) => {
            console.log(doc.payload.doc);
            this.mensagensBox.push(this.grupoService.criaObjMensagem(doc.payload.doc))
          });
        }
      },
      (error) => { },
    )
  }

  addMensagem(texto: String): void {
    let mensagem = {
      uid: '',
      arquivo_url: '',
      data_envio: new Date(),
      enviado_por: this.currentUser.displayName,
      imagem_url: '',
      texto: texto
    }
    this.grupoService.enviarMensagem(this.idGrupoAtivo, mensagem);
  }

  updateCalendar() {
    this.events = [...this.events, {
      "title": "Conference",
      "start": "2016-01-11",
      "end": "2016-01-13"
    }];
    this.options = { ...this.options };
  }

}
