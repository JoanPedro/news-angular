import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent implements OnInit {

  @Input() title: string;
  @Output() plusOne: EventEmitter<number> = new EventEmitter<number>();
  @Output() plusTwo: EventEmitter<number> = new EventEmitter<number>();
  @Output() minusOne: EventEmitter<number> = new EventEmitter<number>();
  @Output() minusTwo: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  plusOneClick() {
    this.plusOne.emit(1);
  }

  plusTwoClick() {
    this.plusTwo.emit(2);
  }

  minusOneClick() {
    this.minusOne.emit(-1);
  }

  minusTwoClick() {
    this.minusTwo.emit(-2);
  }

}
