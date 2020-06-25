import { Component, OnInit, Input } from '@angular/core';

export class Equipo{
  // Caracteristicas de la tabla de cuadrangulares
  constructor(
    public posicion:number,
    public nombre:string, 
    public puntos:number, 
    public victorias:number, 
    public empates:number, 
    public derrotas:number) { 

  }

}

@Component({
  selector: 'app-cuadrangular',
  templateUrl: './cuadrangular.component.html',
  styleUrls: ['./cuadrangular.component.css']
})
export class CuadrangularComponent implements OnInit {

  constructor() { }

//Comunicacion entre componentes: cuadrangular con marcadores  
  @Input() resultados: number[];

//Objetos
  equipoA: Equipo;
  equipoB: Equipo;
  equipoC: Equipo;
  equipoD: Equipo;

  equipos = [];

  ngOnInit(): void {
    //Inicializando variables
    this.equipoA = new Equipo(0, "EQUIPO A", 0, 0, 0, 0);
    this.equipoB = new Equipo(0, "EQUIPO B", 0, 0, 0, 0);
    this.equipoC = new Equipo(0, "EQUIPO C", 0, 0, 0, 0);
    this.equipoD = new Equipo(0, "EQUIPO D", 0, 0, 0, 0);
    this.equipos = [this.equipoA, this.equipoB, this.equipoC, this.equipoD];
    
  }
  sumarPuntos(){  //Asignar puntos

    //No reiniciar valores
    this.equipos.forEach(element => {
      element.puntos = 0;
    });

    
    var partido1 = [this.equipoA, this.equipoB];
    var partido2 = [this.equipoA, this.equipoC];
    var partido3 = [this.equipoA, this.equipoD];
    var partido4 = [this.equipoB, this.equipoC];
    var partido5 = [this.equipoB, this.equipoD];
    var partido6 = [this.equipoC, this.equipoD];
    var partidos = [partido1, partido2, partido3, partido4, partido5, partido6];

    var counter = 0;
    this.resultados.forEach(element => {
      if(element===0){
        //Empate
        partidos[counter][0].puntos += 1;
        partidos[counter][0].empates += 1;
        partidos[counter][1].puntos += 1;
        partidos[counter][1].empates += 1;
      }else if(element===1){
        //Gana Equipo 1
        partidos[counter][0].puntos += 3;
        partidos[counter][0].victorias += 1;
        partidos[counter][1].puntos += 0;
        partidos[counter][1].derrotas += 1;
      }else if(element===2){
        //Gana Equipo 2
        partidos[counter][0].puntos += 0;
        partidos[counter][0].derrotas += 1;
        partidos[counter][1].puntos += 3;
        partidos[counter][1].victorias += 1;
      }
      counter++;      
    });

    this.ordenarArray(this.equipos);
    console.log(this.resultados);
  }

  ordenarArray(array: Equipo[]){ //Ordenamiento por seleccion
    var size = array.length;
    for(let i=0; i<(size-1); i++){
      var idxMax = i;
      for(let j=i+1; j<size; j++){
        if(array[j].puntos > array[idxMax].puntos){
          idxMax =j;
        }
      }
      var temp = array[i];
      array[i] = array[idxMax];
      array[idxMax] = temp;
    }
    this.equipos = array;
    this.asignarPosiciones(this.equipos);
  }

  asignarPosiciones(array: Equipo[]){
    var counter = 1;
    array.forEach(element => {
      element.posicion = counter;
      counter++;
    });
  }

}