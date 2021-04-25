import { UserSetting } from './../data/user-setting.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-setting-form',
  templateUrl: './user-setting-form.component.html',
  styleUrls: ['./user-setting-form.component.css']
})
export class UserSettingFormComponent implements OnInit {

  private _originalUserSetting: UserSetting = {
    userName: null,
    userEmailOffers: null,
    userInterfaceStyle: null,
    userSubscriptionType: null,
    userNotes: null
  }

  userSetting: UserSetting = { ...this._originalUserSetting }

  constructor() { }

  ngOnInit(): void {
  }

}
