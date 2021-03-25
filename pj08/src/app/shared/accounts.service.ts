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

  public addAccount: (newAccount: AccountModel) => void = (newAccount) => {
    this.accounts.push(newAccount);
  }

  public updateStatus: (id: number, status: String) => void = (id, status) => {
    this.accounts[id].status = status;
  }

  public getAccount: () => Array<AccountModel> = () => {
    return this.accounts;
  }
}

export interface AccountModel {
  name: String,
  status: String
}
