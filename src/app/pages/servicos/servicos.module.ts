import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicosComponent } from './servicos.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ServicosComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports:[ServicosComponent],
})
export class ServicosModule { }
