import { Component, OnDestroy, OnInit } from '@angular/core';
import { CompletionObserver, interval, Observable, Subscription } from 'rxjs';

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

        if(count == 2) observer.complete();

        if(count > 3) observer.error(new Error('Count is greater than 3!'));

        count++;
      }, 1000);
    });

    this.theObservableSubscription = customIntervalObservable.subscribe(
      (data: number) => console.log(data),
      (error: Error) => alert(error.message),
      () => { alert("This observer was completed")}
    );
  }

  ngOnDestroy() {
    this.theObservableSubscription.unsubscribe();
  }
}
