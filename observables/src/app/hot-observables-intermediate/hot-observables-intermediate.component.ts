import { Observable, Observer } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hot-observables-intermediate',
  templateUrl: './hot-observables-intermediate.component.html',
  styleUrls: ['./hot-observables-intermediate.component.css']
})
export class HotObservablesIntermediateComponent implements OnInit {
  n1: number = 0;
  n2: number = 0;
  s1: string = "";
  s2: string = "";

  myObservable: Observable<number>;

  constructor() { }

  ngOnInit(): void {
    this.myObservable = new Observable(
      (observer: Observer<number>) => {

    })
  }

}
