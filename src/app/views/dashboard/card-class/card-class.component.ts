import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-class',
  templateUrl: './card-class.component.html',
  styleUrls: ['./card-class.component.scss']
})
export class CardClassComponent implements OnInit {

  @Input('titulo')
  public titulo: string;

  @Input('onlines')
  public onlines: string;

  constructor() { }

  ngOnInit() {
  }

}
