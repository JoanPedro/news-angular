import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyles',
  templateUrl: './ngstyles.component.html',
  styleUrls: ['./ngstyles.component.css']
})
export class NgstylesComponent implements OnInit {
  myFontSize = "12px";
  myColor = "green"

  constructor() { }

  ngOnInit(): void {
  }

}
