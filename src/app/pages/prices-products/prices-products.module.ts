import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricesProductsComponent } from './prices-products.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PricesProductsComponent,],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[PricesProductsComponent,]
})
export class PricesProductsModule { }
