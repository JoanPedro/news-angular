import { DataService } from './../data/data.service';
import { UserSetting } from './../data/user-setting.model';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

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
  postError = false;
  postErrorMessage = '';

  constructor(
    private readonly dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log('On Submit');
    console.log(form);
    if(form.valid) {
      this.dataService.postUserSettingsForm(form.value as UserSetting).subscribe({
        next: result => console.log('Success: ', result),
        error: (error: string) => {
          console.error('Error: ', error)
          this.postError = true;
          this.postErrorMessage = error;
        }
      });
    } else {
      this.postError = true;
      this.postErrorMessage = "Please fix the above errors!";
    }
  }

  onBlur(field: NgModel) {
    console.log('On Blur');
    console.log(field);
  }
}
