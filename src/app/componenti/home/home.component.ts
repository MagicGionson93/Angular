import { NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy{

  // @ViewChild("homeform") homeform: NgForm

  homeform: FormGroup;

  sottoscrizione: any;

  // onSubmit(form: NgForm){
  //   // console.log(this.homeform)
  // }

  onSubmit(){
    console.log(this.homeform)
  }

  ngOnInit(): void{
    this.homeform = new FormGroup({
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      colore: new FormControl(),
    })
  //   this.sottoscrizione = interval(1000).subscribe(numero => {
  //     console.log(numero)
  // })
}

  ngOnDestroy(): void{
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
}
