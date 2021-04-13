import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users: Array<User> = [
    { login: 'Bob', role: 'admin', lastLoginIn: new Date('2/01/2021') },
    { login: 'Lia', role: 'user', lastLoginIn: new Date('3/01/2021') },
    { login: 'John', role: 'admin', lastLoginIn: new Date('4/01/2021') },
    { login: 'Robin', role: 'user', lastLoginIn: new Date('5/01/2021') },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

type User = {
  login: string,
  role: string,
  lastLoginIn: Date
}
