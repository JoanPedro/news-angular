import { Observable, Observer, Subject } from 'rxjs';
import { publish, refCount, tap } from 'rxjs/operators';
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
        let i: number = 0;
        console.log('%c Observable Created', 'background: #cccccc; color: #ff0000')
        setInterval(() => {
          i++;
          (i == 100) ? observer.complete() : observer.next(i);
        }, 1000)
    });

    // this.usingSubject();
    this.usingPublish();
  }

  usingPublish() {
    const multicasted = this.myObservable.pipe(
      tap((num) => console.log(`refCount ${num}`)),
      publish(),
      refCount()
    );

    this.s1 = 'Waiting for interval... observer';
    // Subscriber 1
    setTimeout(() => {
      multicasted.subscribe( n => {
        this.n1 = n;
        this.s1 = 'OK';
      });
    }, 2000);

    this.s2 = 'Waiting for interval... observer 2';
    // Subscriber 2
    setTimeout(() => {
      multicasted.subscribe( n => {
        this.n2 = n;
        this.s2 = 'OK';
      });
    }, 4000);
  }

  usingSubject(): void {
    const subject = new Subject<number>();
    this.myObservable.subscribe(subject);

    this.s1 = 'Waiting for interval... observer';
    // Subscriber 1
    setTimeout(() => {
      subject.subscribe( n => {
        this.n1 = n;
        this.s1 = 'OK';
      });
    }, 2000);

    this.s2 = 'Waiting for interval... observer 2';
    // Subscriber 2
    setTimeout(() => {
      subject.subscribe( n => {
        this.n2 = n;
        this.s2 = 'OK';
      });
    }, 4000);
  }
}
