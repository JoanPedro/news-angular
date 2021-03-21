import { ServerElements } from './../app.component';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement')
  serverElement: ServerElements;

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

}
