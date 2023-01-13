import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicosComponent } from './servicos.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductsModule } from '../products/products.module';
import { PricesProductsModule } from '../prices-products/prices-products.module';



@NgModule({
  declarations: [ServicosComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ProductsModule,
    PricesProductsModule,
  ],
  exports:[ServicosComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class ServicosModule { }
