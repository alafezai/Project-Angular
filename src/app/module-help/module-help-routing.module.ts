import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleHelpComponent } from './module-help.component';

const routes: Routes = [{ path: '', component: ModuleHelpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleHelpRoutingModule { }
