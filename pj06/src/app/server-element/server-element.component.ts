import { ServerElements } from './../app.component';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('srvElement')
  serverElement: ServerElements;

  @Input()
  name: String;

  @ViewChild('heading')
  header: ElementRef;

  @ContentChild('contentParagraph')
  paragraph: ElementRef;

  newServerName = '';
  newServerContent = '';

  constructor() {
    console.log("Constructor Called!");
  }

  ngOnInit(): void {
    console.log("ngOnInit Called!");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges Called!");
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck Called!");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Called!");
    console.log("Text Content: " + (this.paragraph.nativeElement as HTMLParagraphElement).textContent);
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked Called!");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit Called!");
    console.log("Text Content: " + (this.header.nativeElement as HTMLDivElement).textContent);
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked Called!");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy Called!");
  }
}
