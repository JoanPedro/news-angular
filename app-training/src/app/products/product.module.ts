import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    ListComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
