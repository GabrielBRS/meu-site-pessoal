import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[ProductsComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class ProductsModule { }
