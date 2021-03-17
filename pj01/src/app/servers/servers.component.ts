import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', -> <div app-servers></div> (CSS Atribute)
  // selector: 'app-servers', -> <div class="app-servers"></div> (CSS Class)
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
