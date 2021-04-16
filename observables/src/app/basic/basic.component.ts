import { Component, OnInit } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  subscriptionOne: Subscription;
  subscriptionTwo: Subscription;
  n1: number = 0;
  n2: number = 0;
  s1: string = "";
  s2: string = "";

  constructor() { }

  ngOnInit(): void {
    this.s1 = "Initializing...";
    this.s2 = "Initializing...";
    const myObservable = new Observable(
      (observer: Observer<number>) => {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.error("Execução interrompida.");
        observer.next(4);
        observer.next(5);
        observer.complete();
      }
    );

    myObservable.subscribe(
      console.log,
      (err: any) => console.log("Tivemos um erro: " + err),
      () => console.log("Observable completed")
    );

    // const timerCount = interval(1000);
    // timerCount.subscribe(console.log);
    // console.log("After Interval")

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

    this.subscriptionTwo = myIntervalObservable
    .subscribe(
      num => this.n2 = num,
      err => this.s2 = "Error: ".concat(err),
      () => this.s2 = "Completed"
    );

    setTimeout(() => {
      this.subscriptionOne.unsubscribe();
      this.subscriptionTwo.unsubscribe();
    }, 11000);
  }
}
