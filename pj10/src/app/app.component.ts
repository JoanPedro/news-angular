import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  activatedSubs: Subscription;

  userActivated = false;

  constructor(private readonly userService: UserService) {}

  ngOnInit() {
    this.activatedSubs = this.userService.activatedEmitter.subscribe(
      (didActivated: boolean) => this.userActivated = didActivated
    )
  }

  ngOnDestroy() {
    this.activatedSubs.unsubscribe();
  }
}
