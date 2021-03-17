import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', -> <div app-servers></div> (CSS Atribute)
  // selector: 'app-servers', -> <div class="app-servers"></div> (CSS Class)
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  private allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    } , 2000);
  }

  ngOnInit(): void {}

  public getAllowNewServer: () => void = () => {
    return this.allowNewServer;
  }

}
