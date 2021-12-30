import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';
import { AuthModule } from './auth/auth.module';





const routes: Routes = [

  { path: 'HelpMe', loadChildren: () => import('./help-me/help-me.module').then(m => m.HelpMeModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path : 'admin/navbar-admin' , component : NavbarAdminComponent},
  { path: 'promostion', loadChildren: () => import('./promostion/promostion.module').then(m => m.PromostionModule) },
  //{path : 'notfound', component:},
  { path: 'module-help', loadChildren: () => import('./module-help/module-help.module').then(m => m.ModuleHelpModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

]

@NgModule({
  declarations: [],
  exports:[RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AuthModule
  ]
})
export class AppRoutingModule { }
