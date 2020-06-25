import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {

  num: number;
  constructor() { }

  marcadores = [[]];
  resultados = [];

  ngOnInit(): void {
    this.marcadores = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
    this.resultados = [1,2,1,1,2,1];
  }

  showMe(){
    //Determinar ganadores de cada partida

    var counter = 0;
    this.marcadores.forEach(element => {
      if(element[0]>element[1]){
        this.resultados[counter] = 1;
      }else if(element[0]<element[1]){
        this.resultados[counter] = 2;
      }else{
        this.resultados[counter] = 0;
      }
      counter++;      
    });

    console.log(this.resultados);
  }

}
