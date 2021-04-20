import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductDetailGuard } from './shared/product.guard';

const productRouterChildren: Routes = [
  { path: '', component: ProductListComponent },
  { path: ':id', component: ProductDetailComponent, canActivate: [ProductDetailGuard] }
];

// /products [parent] / products [children]
// results an valid path .../products/products

const routes: Routes = [
  { path: 'products', children: productRouterChildren },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
