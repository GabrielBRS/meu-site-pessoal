import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingSiteComponent } from './building-site.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ BuildingSiteComponent,],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[ BuildingSiteComponent,]
})
export class BuildingSiteModule { }
