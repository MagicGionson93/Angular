import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../../servizi/servizio-prova.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

  persone: any;
  persona: any;
  isProfile: boolean;

  constructor(private servizioProva: ServizioProvaService){ } 

  ngOnInit(): void {
    this.persone = this.servizioProva.getPersone()
    // this.persone = this.servizioProva.getPersone()
    // this.isProfile = !this.route.snapshot.paramMap.get("id") ? false : true;
    
    // } else {
    //   this.isProfile = false;
    //   this.persone = this.servizioProva.getPersone()
    // }
    // console.log(this.route.snapshot.paramMap.get("id"))
    // console.log(this.isProfile)
  }

}
