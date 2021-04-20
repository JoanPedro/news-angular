import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailGuard } from './products/shared/product.guard';

const productRouterChildren: Routes = [
  { path: '', component: ProductListComponent },
  { path: ':id', component: ProductDetailComponent, canActivate: [ProductDetailGuard], pathMatch: 'full' },
  { path: ':id/edit', component: ProductEditComponent, canActivate: [ProductDetailGuard], pathMatch: 'full' }
];

const routes: Routes = [
  { path: 'products', children: productRouterChildren },
  { path: 'welcome', component: HomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
