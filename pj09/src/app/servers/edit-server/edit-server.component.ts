import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(
    private serversService: ServersService,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit() {

    // SNAPSHOT - NOT REACTIVELLY, ONCE TIME THAT COMPONENT CREATED
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    // OBSERVABLE PATTERN - REACTIVELLY
    this.route.queryParams.subscribe(
      (queryParam: Params) => { this.allowEdit = queryParam['allowEdit'] === '1' ? true : false }
    );

    this.route.fragment.subscribe(
      (queryParam: String) => { console.log(queryParam) }
    );

    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
