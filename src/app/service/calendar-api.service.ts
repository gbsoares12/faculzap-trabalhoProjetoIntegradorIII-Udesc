import { GrupoService } from './grupo.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalendarApiService {

  constructor(private http: HttpClient, private grupoService: GrupoService) { }


  getEventosCalendarioMoodle(urlCalendarMoodle: string, uidGrupo: string) {
    let dataResult: any;
    const urlCalendar = {
      "urlCalendar": urlCalendarMoodle
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post<any>("https://faculzap-api.herokuapp.com/calendarEnvio", urlCalendar, httpOptions).subscribe(async (result) => {
    if (result.length > 0) {
      this.grupoService.enviarCalendario(uidGrupo, result)
      }
    })
    return dataResult
  }
}
