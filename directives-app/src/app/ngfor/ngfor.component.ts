import { Component, OnInit } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  names: Array<string> = [
    "Joan",
    "Pedro",
    "Oliveira",
    "Souza",
    "Curso",
    "Angular",
    "Capgemini"
  ];

  cities: Array<City> = [
    { name: "Recife", state: "PE" },
    { name: "São Paulo", state: "SP" },
    { name: "Curitiba", state: "PR" },
    { name: "Rio de Janeiro", state: "RJ" },
   ]

  constructor() { }

  ngOnInit(): void { }

  printList(aList: MatSelectionList): Array<String> {
    return aList._value;
  }
}

type City = {
  name: string,
  state: string
}
