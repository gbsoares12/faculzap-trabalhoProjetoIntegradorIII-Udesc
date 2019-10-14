import { GrupoService } from './../../service/grupo.service';
import { Component, OnInit } from '@angular/core';
import { Mensagem } from '../../../model/mensagem';
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
  mensagensBox: Mensagem[];
  mensagemSelected: Mensagem;
  inputMensagem: String;
  events: any[];
  options: any;
  // Conf do Grupo
  currentUser: User;
  idDocUser: string;

  constructor(private grupoService: GrupoService, private router: ActivatedRoute) {
    this.currentUser = JSON.parse(sessionStorage.getItem('userSession'));
    this.idDocUser = sessionStorage.getItem('idDoc');

    this.tituloDisciplina = 'Projeto Integrador';
    this.mensagensBox = [
      { arquivo_url: '', data_envio: null, enviado_por: 'Gabriel Soares', imagem_url: 'none', texto: 'Oi' },
    ];
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

    // Conf Infos Grupo 
    // // se possivel, capture o parametro 
    // let questoesParam = this.router
    //   .queryParamMap
    //   .map(params => params.get('atributo') || 'None');
  }

  addMensagem(texto: String): void {
    this.mensagensBox.push({ arquivo_url: '', data_envio: null, enviado_por: 'Gabriel Soares', imagem_url: '', texto: texto });
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
