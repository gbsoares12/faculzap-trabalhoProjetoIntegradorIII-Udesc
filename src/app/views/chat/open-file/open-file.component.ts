import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-open-file',
  templateUrl: './open-file.component.html',
  styleUrls: ['./open-file.component.scss']
})
export class OpenFileComponent{
  imagem_url: string;
  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.imagem_url = nav.extras.state.imagem_url;

  }


}
