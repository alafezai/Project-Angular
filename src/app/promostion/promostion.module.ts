import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromostionComponent } from './promostionComponent/promostion.component';
import { PromostionRoutingModule } from './promostion.routing.module';
import { PromostionAdminComponent } from './promostionAdminComponent/promostionAdmin.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PromostionComponent,
    PromostionAdminComponent
  ],
  imports: [
    CommonModule,
    PromostionRoutingModule,
    HttpClientModule,
  ]
})
export class PromostionModule { }
