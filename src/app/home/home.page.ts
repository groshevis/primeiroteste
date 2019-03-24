import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  numero : string = "Digite um número:"
  numero2 :string = "Digite um número:"
  numero3 : string = "Digite um número:"

  valor1 : number=0;
  valor2 : number=0;
  valor3 : number=0;

      clicar():void{
        let n1=Number(this.valor1);
        let n2=Number(this.valor2);
        let n3=Number(this.valor3);

        if(n1 > n2 > n3){
          alert("O maior número é o "+this.valor1)
        }
        else if(n2>n1>n3){
          alert("O maior número é o "+this.valor2)
        }
        else{
          alert("O maior número é o "+this.valor3)
        }

      }}
