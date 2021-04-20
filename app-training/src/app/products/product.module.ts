import { SharedModule } from './../shared/shared.module';
import { ProductService } from './shared/product.service';
import { RouterModule } from '@angular/router';
import { ProductRoutingModule } from './product-routing.module';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    RouterModule,
    HttpClientModule,
    ProductRoutingModule,
    SharedModule
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
