import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServizioProvaService } from '../../servizi/servizio-prova.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-contatto',
  standalone: false,
  templateUrl: './contatto.component.html',
  styleUrl: './contatto.component.css'
})
export class ContattoComponent implements OnInit{
    id: number;
    personaContatto: any

    constructor(private route: ActivatedRoute, private servizioProva: ServizioProvaService){}

    ngOnInit (): void{
      this.route.paramMap.subscribe((params: ParamMap)=>{
        this.id = +params.get("id")!
        this.personaContatto = this.servizioProva.getPersona(this.id)
      })
    //   if(this.route.snapshot.paramMap.get("id")){
    //     // this.isProfile = true;
    //     this.personaContatto = this.servizioProva.getPersona(this.id)
    // }  
  }
}
