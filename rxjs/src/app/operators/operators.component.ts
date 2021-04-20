import { from, fromEvent } from 'rxjs';
import { delay, filter, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  mapClick() {
    from([1, 2, 3, 4, 5, 6, 7])
      .pipe(
        filter(num => num % 2 === 1),
        map(num => num * 2),
        map(num => num * 10),
        delay(2000)
      )
      .subscribe(console.log);

    fromEvent(document, 'click')
      .pipe(
        map((e: MouseEvent) => ({ x: e.x, y: e.y }))
      )
      .subscribe(console.log)
  }
}
