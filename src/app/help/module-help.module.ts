import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleHelpRoutingModule } from './module-help-routing.module';
import { ModuleHelpComponent } from './module-help.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModuleHelpComponent
  ],
  imports: [
    CommonModule,
    ModuleHelpRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ]
})
export class ModuleHelpModule { }
