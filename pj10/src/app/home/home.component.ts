import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  theObservableSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.theObservableSubscription = interval(1000)
    //   .subscribe(console.log);

    const customIntervalObservable: Observable<number> = new Observable(observer => {
      let count: number = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });

    this.theObservableSubscription = customIntervalObservable.subscribe( data => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.theObservableSubscription.unsubscribe();
  }
}
