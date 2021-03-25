import { LogginService } from './shared/logging.service';
import { AccountService } from './shared/accounts.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AccountComponent } from './account/account.component';
import { AppComponent } from './app.component';
import { NewAccountComponent } from './new-account/new-account.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [AccountService, LogginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
