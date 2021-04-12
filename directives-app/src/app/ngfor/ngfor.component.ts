import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  names = [
    "Joan",
    "Pedro",
    "Oliveira",
    "Souza",
    "Curso",
    "Angular",
    "Capgemini"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
