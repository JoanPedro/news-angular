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

  constructor() { }

  ngOnInit(): void {
  }

}
