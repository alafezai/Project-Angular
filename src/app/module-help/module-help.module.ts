import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleHelpRoutingModule } from './module-help-routing.module';
import { ModuleHelpComponent } from './module-help.component';


@NgModule({
  declarations: [
    ModuleHelpComponent
  ],
  imports: [
    CommonModule,
    ModuleHelpRoutingModule
  ]
})
export class ModuleHelpModule { }
