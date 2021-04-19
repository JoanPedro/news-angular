import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const s: Subject<number> = new Subject<number>();
    s.subscribe(console.log);
    s.next(1);
    s.next(2);
    s.next(3);
    s.next(4);
    s.next(5);
    s.complete();
    s.next(15);
  }

}
