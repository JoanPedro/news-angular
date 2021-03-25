import { AccountService } from './../shared/accounts.service';
import { Component } from '@angular/core';

import { LogginService } from './../shared/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LogginService]
})
export class NewAccountComponent {
  constructor(
    private readonly logginService: LogginService,
    private readonly accountService: AccountService
  ) {}

  onCreateAccount(name: string, status: string) {
    this.accountService.addAccount({ name, status })
    this.logginService.logStatusChange(status);
  }
}
