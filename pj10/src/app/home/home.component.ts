import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription  } from 'rxjs';
import { map, filter } from 'rxjs/operators';

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

    this.theObservableSubscription = customIntervalObservable.pipe(
      filter( (data: number) => data > 0),
      map((data: number) => {
        return 'Round: '.concat(`${data + 1}`);
      })
    ).subscribe(
      (data: string) => console.log(data),
      (error: Error) => alert(error.message),
      () => { alert("This observer was completed")}
    );
  }

  ngOnDestroy() {
    this.theObservableSubscription.unsubscribe();
  }
}
