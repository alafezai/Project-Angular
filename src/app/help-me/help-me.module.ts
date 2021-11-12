import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpMeRoutingModule } from './help-me-routing.module';
import { HelpMeComponent } from './help-me.component';


@NgModule({
  declarations: [
    HelpMeComponent
  ],
  imports: [
    CommonModule,
    HelpMeRoutingModule
  ]
})
export class HelpMeModule { }
