import { Client } from './../client';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainlifecycle',
  templateUrl: './mainlifecycle.component.html',
  styleUrls: ['./mainlifecycle.component.css']
})
export class MainlifecycleComponent implements OnInit {

  foods: Array<String> = ['Rice', 'Beans', 'Pizza'];
  age: number = 0;
  name: string = "";
  food: string = "";

  editClient: Client;

  clients: Array<Client> = new Array<Client>();

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.clients.push({
      name: this.name,
      age: this.age,
      food: this.food
    })
  }
}
