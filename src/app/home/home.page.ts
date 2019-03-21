import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

        algo : string = "Digite algo"

        botao(): void{

          alert("bobão")
        }

}
