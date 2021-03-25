import { Injectable, EventEmitter } from '@angular/core';
import { LogginService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accounts: Array<AccountModel> = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  private statusUpdated = new EventEmitter<String>();

  constructor(private readonly logginService: LogginService) {}

  public addAccount: (newAccount: AccountModel) => void = (newAccount) => {
    this.accounts.push(newAccount);
    this.logginService.logStatusChange(newAccount.status)
  }

  public updateStatus: (id: number, status: String) => void = (id, status) => {
    this.accounts[id].status = status;
    this.logginService.logStatusChange(status)
  }

  public getAccount: () => Array<AccountModel> = () => {
    return this.accounts;
  }

  public getStatusUpdated: () => EventEmitter<String> = () => {
    return this.statusUpdated;
  }
}

export interface AccountModel {
  name: String,
  status: String
}
