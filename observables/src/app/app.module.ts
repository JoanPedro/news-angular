import { BasicComponent } from './basic/basic.component';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColdObservablesComponent } from './cold-observables/cold-observables.component';
import { HotObservablesComponent } from './hot-observables/hot-observables.component';
import { HotObservablesIntermediateComponent } from './hot-observables-intermediate/hot-observables-intermediate.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectChildComponent } from './subjects/subject-child/subject-child.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ColdObservablesComponent,
    HotObservablesComponent,
    HotObservablesIntermediateComponent,
    SubjectsComponent,
    SubjectChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
