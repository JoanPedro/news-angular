import { GenRandomDataService } from './../gen-random-data.service';
import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { Data } from '@angular/router';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subject$: Subject<Data>;
  replaySubject$: ReplaySubject<Data>;
  asyncSubject$: AsyncSubject<Data>;
  behaviourSubject$: BehaviorSubject<Data>;

  constructor(
    private readonly genRandomData: GenRandomDataService
  ) { }

  ngOnInit(): void {
    this.subject$ = new Subject<Data>();
    this.replaySubject$ = new ReplaySubject<Data>();
    this.asyncSubject$ = new AsyncSubject<Data>();
    this.behaviourSubject$ = new BehaviorSubject<Data>({ timestamp: 0, data: 0 });

    this.genRandomData.data$.subscribe(this.subject$)
    this.genRandomData.data$.subscribe(this.replaySubject$)
    this.genRandomData.data$.subscribe(this.asyncSubject$)
    this.genRandomData.data$.subscribe(this.behaviourSubject$)
  }

  onConnect(): void {
    this.genRandomData.data$.connect();
  }

}
