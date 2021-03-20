import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: Array<ServerElements> = [{
    type: 'server',
    name: 'Testserver',
    content: 'Just a test'
  }];

  onServerAdded(serverData: ServerData) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData: ServerData) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
}

export type ServerElements = {
  type: String,
  name: String,
  content: String
}

export type ServerData = {
  serverName: String,
  serverContent: String
}
