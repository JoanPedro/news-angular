import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements OnInit {

  @Input()
  name: string = "";

  @Input()
  age: number = 0;

  @Input()
  food: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
