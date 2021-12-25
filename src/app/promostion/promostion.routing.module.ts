import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PromostionComponent } from "./promostion.component";
  
const routes: Routes = [
  { path: "", component: PromostionComponent },

];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromostionRoutingModule {}