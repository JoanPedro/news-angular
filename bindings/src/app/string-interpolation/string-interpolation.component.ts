import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstname = "John";
  age = 87;
  person = {
    firstname: "John",
    lastname: "Prosper",
    age: 57,
    address: "Route 100"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
