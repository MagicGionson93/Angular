import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioProvaService {

  constructor() { }

  persone = [
    { nome:"luca", cognome: "rossi", isOneline: true, color: "blue" },
    { nome:"anna", cognome: "verdi", isOneline: false, color: "green" },
    { nome:"marco", cognome: "giallo", isOneline: true, color: "purple" },
  ]

  getPersone(){
    return this.persone
  }

  getPersona(index: number){
    return this.persone[index]
  }
  
}
