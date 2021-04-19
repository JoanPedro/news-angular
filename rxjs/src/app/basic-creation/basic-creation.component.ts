import { Component, OnInit } from '@angular/core';
import {
  Observable,
  Observer,
  from,
  of,
  interval,
  timer
} from 'rxjs';

@Component({
  selector: 'app-basic-creation',
  templateUrl: './basic-creation.component.html',
  styleUrls: ['./basic-creation.component.css']
})
export class BasicCreationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  onObservableCreate() {
    const hello = new Observable(
      (observer: Observer<string>) => {
        observer.next("Hello");
        observer.next("from");
        observer.next("Observable");
        observer.complete();
      }
    );

    hello.subscribe(console.log);
  }

  fromClick() {
    const source: Observable<any> = from([1, 2, 3, 4, 5, { x: 10, y: 20 }]);
    source.subscribe({
      next: console.log
    });
  }

  ofClick() {
    const source: Observable<any> = of([1, 2, 3, 4, 5, { x: 10, y: 20 }]);
    source.subscribe({
      next: console.log
    });
  }

  intervalClick() {
    const source = interval(1000);
    source.subscribe({
      next: console.log
    });
  }

  timerClick() {
    const source = timer(3000, 1000);
    source.subscribe({
      next: console.log
    })
  }

  onUnsubscribe() {

  }
}
