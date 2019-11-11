import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-class',
  templateUrl: './card-class.component.html',
  styleUrls: ['./card-class.component.scss']
})
export class CardClassComponent implements OnInit{
  ngOnInit(): void {
    this.integrantes = this.onlines.length + '';
  }

  @Input('titulo')
  public titulo: string;

  @Input('onlines')
  public onlines: any[];

  @Input('idGrupo')
  public idGrupo: string;
  integrantes: string;
  constructor(public router: Router) {
    
   }


}
