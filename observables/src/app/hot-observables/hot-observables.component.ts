import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-hot-observables',
  templateUrl: './hot-observables.component.html',
  styleUrls: ['./hot-observables.component.css']
})
export class HotObservablesComponent implements OnInit, AfterViewInit {

  @ViewChild('myButton') myButton: ElementRef<HTMLButtonElement>;
  n1: number = 0;
  n2: number = 0;
  s1: string = "";
  s2: string = "";

  constructor() { }

  ngOnInit() {
    type Listener = (myArgument: any) => void;

    class Producer {
      private myListeners: Array<Listener> = [];
      private count = 0;
      private id;

      public addListener(listener: Listener): void {
        this.myListeners.push(listener);
      }

      public start(): void {
        this.id = setInterval(() => {
          this.count++;
          console.log('From Producer: ' + this.count);
          this.myListeners.forEach(listener => listener(this.count))
        }, 1000)
      }
    }

    const producer: Producer = new Producer();
    producer.start();
    setTimeout(() => {
      producer.addListener( n => console.log('From Listener 1: ' + n));
      producer.addListener( n => console.log('From Listener 2: ' + n));
    }, 4000);
  }

  ngAfterViewInit(): void {
    const myBtnClickObservable: Observable<Event> = fromEvent(
      this.myButton.nativeElement, 'click'
    );
    myBtnClickObservable.subscribe((ev: Event) => {
      console.log(ev);
    })
  }
}
