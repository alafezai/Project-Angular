import { SavePromoComponent } from './savepromo/savepromo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromostionComponent } from './promostionComponent/promostion.component';
import { PromostionRoutingModule } from './promostion.routing.module';
import { PromostionAdminComponent } from './promostionAdminComponent/promostionAdmin.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PromostionComponent,
    PromostionAdminComponent,
    SavePromoComponent,
  ],
  imports: [
    CommonModule,
    PromostionRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PromostionModule { }
