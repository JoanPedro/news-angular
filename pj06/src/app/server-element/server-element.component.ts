import { ServerElements } from './../app.component';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

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

  newServerName = '';
  newServerContent = '';

  constructor() {
    console.log("Constructor Called!");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges Called!");
    console.log(changes)
  }

  ngOnInit(): void {
    console.log("ngOnInit Called!");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck Called!");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Called!");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked Called!");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit Called!");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked Called!");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy Called!");
  }
}
