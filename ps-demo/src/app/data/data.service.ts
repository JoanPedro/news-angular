import { UserSetting } from './user-setting.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private readonly httpClient: HttpClient
  ) {}

  postUserSettingsForm(userSetting: UserSetting): Observable<any> {
    // return of(userSetting);
    return this.httpClient.post('https://putsreq.com/k1CiwxbpvzCJCrHpnuO3', userSetting);
  }
}
