import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';

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
    console.log();
  }

  printList(aList: MatSelectionList): Array<String> {
    return aList._value;
  }
}
