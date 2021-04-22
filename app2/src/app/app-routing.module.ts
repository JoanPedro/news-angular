import { IdCanActivateGuard } from './shared/id-guard.guard';
import { OfertaComponent } from './oferta/oferta.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurantes', children: [
    { path: '',  component: RestaurantesComponent },
    { path: ':id', component: OfertaComponent, canActivate: [IdCanActivateGuard] }
  ]},
  { path: 'diversao', children: [
    { path: '',  component: DiversaoComponent },
    { path: ':id', component: OfertaComponent, canActivate: [IdCanActivateGuard] }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
