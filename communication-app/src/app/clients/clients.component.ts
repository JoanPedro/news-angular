import { Client_2 } from './shared/client.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  name: string = "";
  age: number = 0;

  clients: Array<Client_2> = [];

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.clients.push({
      name: this.name,
      age: this.age
    });

    this.name = "";
    this.age = 0;
  }
}
