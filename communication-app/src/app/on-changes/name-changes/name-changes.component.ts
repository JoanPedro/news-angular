import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-name-changes',
  templateUrl: './name-changes.component.html',
  styleUrls: ['./name-changes.component.css']
})
export class NameChangesComponent implements OnInit, OnChanges {

  @Input() name: string;
  nameBefore: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.hasOwnProperty('name'))
      this.nameBefore = changes['name'].previousValue;
  }
}
