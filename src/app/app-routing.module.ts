import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingSiteComponent } from './pages/building-site/building-site.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PricesProductsComponent } from './pages/prices-products/prices-products.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicosComponent } from './pages/servicos/servicos.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'servicos', component:ServicosComponent},
  {path:'servicos/:id', component:BuildingSiteComponent,
     children: [
      {path: '', redirectTo: '1', pathMatch: 'full'},
      {path: '1', component: ProductsComponent},
      {path: '1/:ids', component: ProductsComponent,
        children:[
          {path:'1', component:ProductsComponent},
          {path:'2', component:ProductsComponent},
          {path:'3', component:ProductsComponent},
        ]},
      {path: '2', component: PricesProductsComponent},
      {path: '2/:idp', component: PricesProductsComponent,
        children:[
          {path:'1', component:PricesProductsComponent},
          {path:'2', component:PricesProductsComponent},
          {path:'3', component:PricesProductsComponent},
        ],
      }
  ]},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
