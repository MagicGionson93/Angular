import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServizioProvaService } from '../../servizi/servizio-prova.service';
import { subscribeOn } from 'rxjs';
import { FirebaseService } from '../../servizi/firebase.service';

@Component({
  selector: 'app-contatto',
  standalone: false,
  templateUrl: './contatto.component.html',
  styleUrl: './contatto.component.css'
})
export class ContattoComponent implements OnInit{
    personaContatto: any
    constructor(private route: ActivatedRoute, private firebase: FirebaseService){}

    ngOnInit (): void{
      this.route.paramMap.subscribe((params: ParamMap)=>{
        const id = params.get("id")!
        this.firebase.getPersonaById(id).subscribe(data => {
          this.personaContatto = {...data, id}
        })
        // this.personaContatto = this.servizioProva.getPersona(this.id)        
      })
    //   if(this.route.snapshot.paramMap.get("id")){
    //     // this.isProfile = true;
    //     this.personaContatto = this.servizioProva.getPersona(this.id)
    // }  
  }


}
