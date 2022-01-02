import { SingUpComponent } from './singup/singup.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';
import { AuthGuard } from './auth.guard';






const routes: Routes = [
  {path:'', component: IndexComponent},
  { path: 'HelpMe', loadChildren: () => import('./help-me/help-me.module').then(m => m.HelpMeModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path : 'admin/navbar-admin' , component : NavbarAdminComponent},
  { path: 'promostion', loadChildren: () => import('./promostion/promostion.module').then(m => m.PromostionModule) },
  //{path : 'notfound', component:},
  { path: 'module-help', loadChildren: () => import('./module-help/module-help.module').then(m => m.ModuleHelpModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule), canActivate: [AuthGuard] },

    {path:'singup', component: SingUpComponent},

]

@NgModule({
  declarations: [],
  exports:[RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AuthModule,
    CustomerModule
  ]
})
export class AppRoutingModule { }
