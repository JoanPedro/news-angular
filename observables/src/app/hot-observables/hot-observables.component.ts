import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observer, Observable, Subscription, fromEvent } from 'rxjs';

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
