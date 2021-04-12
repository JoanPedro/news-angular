import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.css']
})
export class TwowayBindingComponent implements OnInit {
  name1: String = "";
  name2: String = "";

  client: Client = {
    firstName: "Joan",
    lastName: "de Souza",
    address: "Boa Esperança",
    age: 23
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}

type Client = {
  firstName: string,
  lastName: string,
  address: string,
  age: number
}
