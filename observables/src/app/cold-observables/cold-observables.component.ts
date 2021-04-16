import { Component, OnInit } from '@angular/core';
import { Observer, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cold-observables',
  templateUrl: './cold-observables.component.html',
  styleUrls: ['./cold-observables.component.css']
})
export class ColdObservablesComponent implements OnInit {

  subscriptionOne: Subscription;
  subscriptionTwo: Subscription;
  n1: number = 0;
  n2: number = 0;
  s1: string = "";
  s2: string = "";

  constructor() { }

  ngOnInit(): void {
    this.s1 = "Waiting for interval...";
    this.s2 = "Waiting for interval...";

    const myIntervalObservable = new Observable(
      (observer: Observer<any>) => {
        let i: number = 0;
        const id = setInterval(_ => {
          console.log("From Observable: " + ++i);
          if(i === 10) observer.complete();
          if(i % 2 == 0) observer.next(i);
        }, 1000)
        return _ => clearInterval(id);
      }
    );

    this.subscriptionOne = myIntervalObservable
    .subscribe(
      num => this.n1 = num,
      err => this.s1 = "Error: ".concat(err),
      () => this.s1 = "Completed"
    );

    setInterval(_ => {
      this.subscriptionTwo = myIntervalObservable
      .subscribe(
        num => this.n2 = num,
        err => this.s2 = "Error: ".concat(err),
        () => this.s2 = "Completed"
      );
    }, 3000);

    setTimeout(() => {
      this.subscriptionOne.unsubscribe();
      this.subscriptionTwo.unsubscribe();
    }, 11000);
  }
}
