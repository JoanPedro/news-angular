import { UserSetting } from './user-setting.model';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private readonly httpClient: HttpClient
  ) {}

  postUserSettingsForm(userSetting: UserSetting): Observable<any> {
    // return of(userSetting);
    return this.httpClient.post('https://putsreq.com/k1CiwxbpvzCJCrHpnuO3', userSetting)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  private errorHandler: (err: HttpErrorResponse) => Observable<never> = err =>  {
    let errorMessage = '';

    if(err instanceof ErrorEvent) {
      errorMessage = "Some error occurs on client-side!"
    } else {
      errorMessage = "Some error was catched on server!"
    }
    return throwError(errorMessage);
  }
}
