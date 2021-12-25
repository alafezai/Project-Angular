import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromostionComponent } from './promostion.component';
import { PromostionRoutingModule } from './promostion.routing.module';



@NgModule({
  declarations: [
    PromostionComponent,
  ],
  imports: [
    CommonModule,
    PromostionRoutingModule,
  ]
})
export class PromostionModule { }
