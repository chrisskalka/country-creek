import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  {
    path: 'admin',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)

  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'pictures',
    loadChildren: () => import('./picturePage/picturePage.module').then(m => m.PicturePageModule)
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
