import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PromostionAdminComponent } from "./promostionAdminComponent/promostionAdmin.component";
import { PromostionComponent } from "./promostionComponent/promostion.component";

const routes: Routes = [
  { path: "", component: PromostionComponent },
  { path: "testadmin", component: PromostionAdminComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromostionRoutingModule {}
