import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ModelCardModule } from '../components/model-card/model-card.module';



@NgModule({
  imports: [
    CommonModule,
    ModelCardModule,
  ],
  exports:[HomeComponent],
  declarations: [HomeComponent],
})
export class HomeModule { }
