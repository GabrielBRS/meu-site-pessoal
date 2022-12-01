import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { FooterModule } from './components/footer/footer.module';

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
    NavbarModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
