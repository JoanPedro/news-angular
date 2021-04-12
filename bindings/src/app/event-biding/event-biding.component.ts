import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-biding.component.html',
  styleUrls: ['./event-biding.component.css']
})
export class EventBidingComponent implements OnInit {

  i = 0;
  buttonName = "My button";
  constructor() { }
  spinnerMode: ProgressSpinnerMode = "determinate";
  btnEnable = true;
  selectDisable = false;
  selectedOption = 1;

  inputName: String = "John";

  ngOnInit(): void {
  }

  save() {
    console.log("Click");
  }

  inc() {
    this.i++;
    this.buttonName = "Foi clicado!! " + this.i + " vezes";
  }

  disable() {
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout( () => {
      this.btnEnable = true;
      this.spinnerMode = "determinate"
    } , 3000 );
  }

  cbChange(event: MatCheckboxChange) {
    console.log(event);
    this.selectDisable = event.checked;
  }

  selectionChange($event: MatSelectChange) {
    console.log($event);
    this.selectedOption = $event.value;
  }

  /*
  inputEvent(event) {
    console.log(event.target.value);
    console.log(this.inputName);
  }
*/
}
