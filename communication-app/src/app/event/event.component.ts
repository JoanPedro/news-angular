import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  title: string = "Operations Button"
  value: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  operateNum(event: number) {
    this.value += event;
  }
}
