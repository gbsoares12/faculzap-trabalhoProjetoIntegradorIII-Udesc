import { Component, OnInit } from '@angular/core';
import { Mensagem } from './mensagem';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

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

  constructor() {
    this.tituloDisciplina = 'Projeto Integrador';
    this.mensagensBox = [
      { arquivo_url: '', data_envio: null, enviado_por: 'Gabriel Soares', imagem_url: 'none', texto: 'Oi' },
    ];
  }

  ngOnInit() {
    this.events = [
      {
        "title": "Trabalho de PIN III",
        "start": "2019-10-03"
      },
      {
        "title": "Long Event",
        "start": "2016-01-07",
        "end": "2016-01-10"
      },
      {
        "title": "Repeating Event",
        "start": "2016-01-09T16:00:00"
      },
      {
        "title": "Repeating Event",
        "start": "2016-01-16T16:00:00"
      },
      {
        "title": "Conference",
        "start": "2016-01-11",
        "end": "2016-01-13"
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
  }

  addMensagem(texto: String): void {
    this.mensagensBox.push({ arquivo_url: '', data_envio: null, enviado_por: 'Gabriel Soares', imagem_url: '', texto: texto });
    console.log(this.mensagensBox.length)
  }

  updateCalendar() {

    //correct
    this.events = [...this.events, {
      "title": "Conference",
      "start": "2016-01-11",
      "end": "2016-01-13"
    }];


    //correct
    this.options = { ...this.options };
  }


}
