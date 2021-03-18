import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', -> <div app-servers></div> (CSS Atribute)
  // selector: 'app-servers', -> <div class="app-servers"></div> (CSS Class)
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  private allowNewServer: boolean = false;
  private serverCreation: string = "No server criation at least!"
  serverName: string;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    } , 2000);
  }

  ngOnInit(): void {}

  public getAllowNewServer: () => Boolean = () => {
    return this.allowNewServer;
  }

  public getServerCreation: () => String = () => {
    return this.serverCreation;
  }

  public onCreateServer: () => void = () => {
    this.serverCreation = `Server was created! Name is ${this.getServerName()}`;
  }

  public onUpdateServerName: (event: Event) => void = (event) => {
    // Casting
    // this.serverName = (<HTMLInputElement> event.target).value;

    // TSX mode with alias
    this.serverName = (event.target as HTMLInputElement).value;
  }

  public getServerName: () => String = () => {
    return this.serverName;
  }

  // Recebe $event, mas não é um tipo Event! Retorna justamente uma string.
  public setServerName: (value: string) => void = (value) => {
    console.log(value)
    this.serverName = value;
  }
}
