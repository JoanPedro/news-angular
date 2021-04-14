import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnInit {

  yourName: string = "";
  newName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  updateName() {
    this.newName = this.yourName;
  }
}
