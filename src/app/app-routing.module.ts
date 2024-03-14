import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'confirm',
    loadChildren: () => import('./components/confirm/confirm.module').then((m) => m.ConfirmModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./components/form/form.module').then((m) => m.FormModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./components/success/success.module').then((m) => m.SuccessModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
