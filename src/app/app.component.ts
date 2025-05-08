import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ServizioProvaService } from './servizi/servizio-prova.service';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{

  constructor(private servizioProva: ServizioProvaService){}

  valore = "";
  colore = ""

  oggi = Date.now()

  @ViewChild('inputSaluti') valoreInput!: ElementRef<HTMLInputElement>;

  title = 'corso-angular';
  // isVisible = true;

  ngOnInit(): void{
    // interval(1000).subscribe(numero => {
      // console.log(numero)
    // });

    // new Observable(observer => {
    //   let count = 0;
    //   setInterval(()=> {
    //     observer.next(count)
    //     count++;
    //   }, 1000);      
    // }).subscribe((numero)=>{
    //   // console.log(numero)
    // })
  }

  // onClick(){
  //   console.log(this.valoreInput.nativeElement.value)
  // }

  // persone = [
  //   { nome:"luca", cognome: "rossi", isOneline: true },
  //   { nome:"anna", cognome: "verdi", isOneline: false },
  //   { nome:"marco", cognome: "giallo", isOneline: true },
  // ]

  // cambiaColoreEvidenziatore(coloreEvidenziatore: string){
  //   this.colore = coloreEvidenziatore;
  // }

  // onClick(){
  //   this.persone = [
  //     { nome:"sad", cognome: "asdasdasd", isOneline: true },
  //     { nome:"sadd", cognome: "asdasdsad", isOneline: false },
  //     { nome:"dsadsad", cognome: "asdsad", isOneline: true },
  //   ]
  // }

  // riceviDatiEvento(value: string){
  //   console.log(value)
  // }

//   onClick(e: Event) {
//     this.title="ho cliccato sul button"
//   }

//   onInput(e:Event) {
//     // console.log( (<HTMLInputElement>e.target).value );
//     this.title = (<HTMLInputElement>e.target).value;
//   }
}
