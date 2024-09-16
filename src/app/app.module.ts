import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { FooterModule } from './components/footer/footer.module';
import { ProductsModule } from './pages/products/products.module';
import { ServicosModule } from './pages/servicos/servicos.module';
import { ServicosService } from './servicos.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    //Angular
    BrowserModule,
    CommonModule,
    //Routing
    AppRoutingModule,
    //Pages
    HomeModule,
    ProductsModule,
    ServicosModule,
    NavbarModule,
    FooterModule,
  ],
  providers:[ServicosService],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppModule { }
