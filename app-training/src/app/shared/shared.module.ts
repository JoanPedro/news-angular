import { ConvertToSpacesPipe } from './pipes/convert-to-spaces.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ConvertToSpacesPipe,
    StarComponent
  ]
})
export class SharedModule { }
