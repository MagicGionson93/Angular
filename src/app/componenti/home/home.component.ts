import { NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { interval, Observable } from 'rxjs';
import { FirebaseService } from '../../servizi/firebase.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  // @ViewChild("homeform") homeform: NgForm

  homeform: FormGroup;

  sottoscrizione: any;

  constructor(private firebase: FirebaseService) { }

  // onSubmit(form: NgForm){
  //   // console.log(this.homeform)
  // }

  // onSubmit() {
  //   console.log(this.homeform)
  // }

  ngOnInit(): void {
    this.homeform = new FormGroup({
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      colore: new FormControl(),
    })
  }

  onSubmit() {
    this.firebase.insertPersona("https://corso-angular-2ad46-default-rtdb.europe-west1.firebasedatabase.app/persone.json", {
      nome: this.homeform.value.nome, email: this.homeform.value.email,
    }).subscribe(data => {
      console.log(data)
    })
  }

  //   this.sottoscrizione = interval(1000).subscribe(numero => {
  //     console.log(numero)
  // })

  ngOnDestroy(): void {
    // this.sottoscrizione.unsubscribe()
  }
  // new Observable(observer => {
  //   let count = 0;
  //   setInterval(()=> {
  //     observer.next(count)
  //     count++;
  //   }, 1000);      
  // }).subscribe((numero)=>{
  //   // console.log(numero)
  // })

  onDeletePersona(){
    this.firebase.deletePersona("https://corso-angular-2ad46-default-rtdb.europe-west1.firebasedatabase.app/persone", "-OPpHUy1LE3g_nkzRHhS")
    .subscribe(data => {
      console.log(data)
    })
  }

  onPatchPersona(){
    this.firebase.patchPersona("https://corso-angular-2ad46-default-rtdb.europe-west1.firebasedatabase.app/persone","-OPpHUy1LE3g_nkzRHhS",
      {email: "prova@prova@gmail.com"}).subscribe(data => {
        console.log(data)
      })
  }
}
