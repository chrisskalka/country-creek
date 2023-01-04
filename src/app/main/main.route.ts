import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const homeRoutes: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    {
      path: 'home',
      loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})

export class MainRoutingModule { }