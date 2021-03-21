import { ServerData } from './../app.component';
import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output()
  serverCreated = new EventEmitter<ServerData>();

  @Output()
  bluePrintCreated = new EventEmitter<ServerData>();

  @ViewChild('serverContentInput')
  serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: (this.serverContentInput.nativeElement as HTMLInputElement).value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: nameInput.value,
      serverContent: (this.serverContentInput.nativeElement as HTMLInputElement).value
    });
  }

}
