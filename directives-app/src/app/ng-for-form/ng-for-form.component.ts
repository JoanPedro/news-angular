import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  name: string = "";
  address: string = "";
  phone: string = "";
  city: string = "";
  age: number = 0;

  cities: Array<City> = [
    { name: "Recife", state: "PE" },
    { name: "São Paulo", state: "SP" },
    { name: "Curitiba", state: "PR" },
    { name: "Rio de Janeiro", state: "RJ" },
  ];

  clients: Array<Client> = [];

  constructor() { }

  ngOnInit(): void {
  }

  handleSave() {
    this.clients.push({
      name: this.name,
      address: this.address,
      phone: this.phone,
      city: this.city,
      age: this.age
    });
    this.handleCancel();
    console.log(this.clients)
  }

  handleCancel() {
    this.name = "",
    this.address = "",
    this.phone = "",
    this.city = "",
    this.age = 0
  }
}

type City = {
  name: string,
  state: string
}

type Client = {
  name: string,
  address: string,
  phone: string,
  city: string,
  age: number
}
