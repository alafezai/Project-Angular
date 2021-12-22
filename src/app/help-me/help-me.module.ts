import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpMeRoutingModule } from './help-me-routing.module';
import { HelpMeComponent } from './help-me.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HelpMeComponent,
    
  ],
  imports: [
    CommonModule,
    HelpMeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class HelpMeModule { }
