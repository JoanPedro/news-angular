import { AccountModel, AccountService } from './shared/accounts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit {
  accounts: Array<AccountModel> = [];

  constructor(private readonly accountService: AccountService) {}

  ngOnInit() {
    this.accounts = this.accountService.getAccount();
  }
}
