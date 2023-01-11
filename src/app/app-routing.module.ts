import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PricesProductsComponent } from './pages/prices-products/prices-products.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicosComponent } from './pages/servicos/servicos.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'servicos', component:ServicosComponent},
  {path:'servicos/:id', component:ServicosComponent,
     children: [
      {path: '', redirectTo: '1', pathMatch: 'full'},
      {path: '1', component: ProductsComponent},
      {path: '2', component: PricesProductsComponent}
  ]},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
