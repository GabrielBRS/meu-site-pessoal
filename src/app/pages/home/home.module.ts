import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ModelCardModule } from '../../components/model-card/model-card.module';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    ModelCardModule,
    RouterModule,
  ],
  exports:[HomeComponent],
  declarations: [HomeComponent],
})
export class HomeModule { }
