import { AccountModel, AccountService } from './../shared/accounts.service';
import { LogginService } from './../shared/logging.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LogginService]
})
export class AccountComponent {
  @Input() account: AccountModel;
  @Input() id: number;

  constructor(
    private readonly logginService: LogginService,
    private readonly accountService: AccountService
  ) {}
  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // this.logginService.logStatusChange(status);
  }
}
