import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';
import { NOTFOUND } from 'dns';





const routes: Routes = [
  
  { path: 'HelpMe', loadChildren: () => import('./help-me/help-me.module').then(m => m.HelpMeModule) },
  { path: 'SignIn' , component: SigninComponent},
  { path: 'SignUp' , component: SignupComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path : 'admin/navbar-admin' , component : NavbarAdminComponent},
  
  //{path : 'notfound', component:},
  { path: 'module-help', loadChildren: () => import('./module-help/module-help.module').then(m => m.ModuleHelpModule) },
  

]

@NgModule({
  declarations: [],
  exports:[RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
