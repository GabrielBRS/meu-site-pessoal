import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricesProductsComponent } from './prices-products.component';



@NgModule({
  declarations: [PricesProductsComponent,],
  imports: [
    CommonModule
  ],
  exports:[PricesProductsComponent,]
})
export class PricesProductsModule { }
