import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppComponent } from './app.component';
import { NgstylesComponent } from './ngstyles/ngstyles.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgifComponent } from './ngif/ngif.component';
import { SubNgIfComponent } from './ngif/sub-ng-if/sub-ng-if.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgForFormComponent } from './ng-for-form/ng-for-form.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';

@NgModule({
  declarations: [
    AppComponent,
    NgstylesComponent,
    NgclassComponent,
    NgifComponent,
    SubNgIfComponent,
    NgforComponent,
    NgForFormComponent,
    NgSwitchComponent,
    NgTemplateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
