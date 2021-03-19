import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  secretPassword: number = 3332;
  paragraphState: boolean;
  buttonLogs: Array<number>;


  ngOnInit() {
    this.buttonLogs = new Array;
  }

  handleButtonClick: () => void = () => {
    this.buttonLogs.push(Date.now())
    this.paragraphState = !this.paragraphState;
  }

  getParagraphState: () => Boolean = () => {
    return this.paragraphState;
  }
}

