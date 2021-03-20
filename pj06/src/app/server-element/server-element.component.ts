import { ServerElements } from './../app.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input()
  serverElement: ServerElements;

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

}
