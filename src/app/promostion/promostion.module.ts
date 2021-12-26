import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromostionComponent } from './promostionComponent/promostion.component';
import { PromostionRoutingModule } from './promostion.routing.module';
import { PromostionAdminComponent } from './promostionAdminComponent/promostionAdmin.component';



@NgModule({
  declarations: [
    PromostionComponent,
    PromostionAdminComponent
  ],
  imports: [
    CommonModule,
    PromostionRoutingModule,
  ]
})
export class PromostionModule { }
