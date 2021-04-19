import { publish } from 'rxjs/operators';
import { Data } from './data.model';
import { Injectable } from '@angular/core';
import { ConnectableObservable, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenRandomDataService {
  data$: ConnectableObservable<Data>;

  constructor() {
    this.data$ = new Observable(
      (observer: Observer<Data>) => {
        let n = 0;
        console.log("Observable Created");

        const f = () => {
          n++;
          console.log(n);
          if (n <= 10) {
            let timestamp = Math.random() * 2000 + 500;
            observer.next({
              timestamp,
              data: n
            });
            setTimeout(f, timestamp);
          } else observer.complete();
        }

        f();
      }
    ).pipe(publish()) as ConnectableObservable<Data>;
  }
}
