import { Observable } from 'rxjs';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changedSaved = false;

  constructor(
    private serversService: ServersService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit() {

    // SNAPSHOT - NOT REACTIVELLY, ONCE TIME THAT COMPONENT CREATED
    console.log(this.activatedRoute.snapshot.queryParams);
    console.log(this.activatedRoute.snapshot.fragment);

    // OBSERVABLE PATTERN - REACTIVELLY
    this.activatedRoute.queryParams.subscribe(
      (queryParam: Params) => { this.allowEdit = queryParam['allowEdit'] === '1' ? true : false }
    );

    this.activatedRoute.fragment.subscribe(
      (queryParam: String) => { console.log(queryParam) }
    );

    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changedSaved = true;
    this.router.navigate(['../'], {
      relativeTo: this.activatedRoute
    });
  }

  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean = () => {
    if(!this.allowEdit) return true;

    if(
      (this.serverName !== this.server.name || this.serverStatus !== this.server.status)
      && !this.changedSaved
    ) { return confirm('Do you want to discard the changes?') } else {
      return true;
    }
  }
}
