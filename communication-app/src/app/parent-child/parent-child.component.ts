import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit, AfterViewInit {

  @ViewChild('otherStopWatch')
  myTimer: TimerComponent;

  @ViewChild('myP')
  myParagraph: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  start() {
    this.myTimer.start();
  }

  stop() {
    this.myTimer.stop();
  }

  clear() {
    this.myTimer.clear();
  }

  ngAfterViewInit() {
    const pContent: string = (this.myParagraph.nativeElement as HTMLParagraphElement).textContent;
    console.log(pContent);
  }
}
