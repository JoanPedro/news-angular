import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // const id: number = Number.parseInt(this.activatedRoute.snapshot.params['id'] as string);
    const id: number = +(this.activatedRoute.snapshot.params['id'] as string);
    this.server = this.serversService.getServer(id);
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        // const id: number = Number.parseInt(params['id'] as string);
        const id: number = +(params['id'] as string);
        this.server = this.serversService.getServer(id);
      }
    );
  }

}
