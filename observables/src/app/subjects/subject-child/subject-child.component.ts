import { Data } from './../../data.model';
import { Subject, Observer, Subscription } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-child',
  templateUrl: './subject-child.component.html',
  styleUrls: ['./subject-child.component.css']
})
export class SubjectChildComponent implements OnInit {
  private _subscription$: Subscription = new Subscription();

  @Input() subject$: Subject<Data>;
  @Input() name: string;

  log: Array<string> = [];
  connected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onConnect() {
    this.log.push("Connected");
    this.connected = true;
    this._subscription$ = this.subject$.subscribe(
      this.logData,
      err => this.connected = false,
      () => { this.connected = false; this.log.push("Finished!"); }
    );
  }

  onDisconnect() {

  }

  logData: (data: Data) => void =
    (data) => { this.log.push(`Timestamp: ${data.timestamp} ${data.data}`); }
}
